import fs from 'fs';
import path from 'path';
import https from 'https';

const STATS_FILE = path.join(process.cwd(), 'src', 'data', 'codolioStats.json');

const fetchJson = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
};

(async () => {
  try {
    let previousStats = {};
    if (fs.existsSync(STATS_FILE)) {
      try {
        previousStats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
      } catch (e) {
        console.warn("Could not read previous stats, proceeding without them.");
      }
    }

    console.log("Fetching Codolio profile and leaderboard data via API...");
    const [profileRes, leaderboardRes] = await Promise.all([
      fetchJson('https://api.codolio.com/profile?userKey=Rohann'),
      fetchJson('https://node.codolio.com/api/leaderboard/v1/get-user-leaderboard?userId=19268')
    ]);

    const platforms = profileRes.data?.platformProfiles?.platformProfiles || [];
    let totalSolved = 0;
    let maxRating = 0;
    let contestCount = 0;
    const allActiveDays = new Set();

    platforms.forEach(p => {
      // Questions solved across platforms
      const q = p.totalQuestionStats?.totalQuestionCounts || 0;
      totalSolved += q;

      // Platform max rating
      if (p.userStats?.maxRating && p.userStats.maxRating > maxRating) {
        maxRating = p.userStats.maxRating;
      }

      // Submission dates
      const cal = p.dailyActivityStatsResponse?.submissionCalendar;
      if (cal) {
        Object.keys(cal).forEach(ts => {
          const d = new Date(parseInt(ts, 10) * 1000).toISOString().split('T')[0];
          allActiveDays.add(d);
        });
      }

      // Contests
      const contests = p.contestActivityStats?.contestActivityList?.length || 0;
      contestCount += contests;
    });

    // Global rank from leaderboard
    const globalRank = leaderboardRes.data?.global?.['1']?.rank || 2619;

    // Calculate maximum continuous active streak across all platforms
    const sortedDays = Array.from(allActiveDays).sort();
    let maxStreak = 0;
    let currStreak = 0;
    for (let i = 0; i < sortedDays.length; i++) {
      if (i === 0) {
        currStreak = 1;
      } else {
        const prev = new Date(sortedDays[i - 1]);
        const curr = new Date(sortedDays[i]);
        const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          currStreak++;
        } else {
          currStreak = 1;
        }
      }
      if (currStreak > maxStreak) {
        maxStreak = currStreak;
      }
    }

    const stats = {
      totalSolved: String(totalSolved),
      globalRank: String(globalRank),
      rating: String(maxRating),
      maxStreak: String(maxStreak),
      contestsAttended: String(contestCount),
      activeDays: String(allActiveDays.size)
    };

    const currentSolved = parseInt(stats.totalSolved, 10);
    const previousSolved = previousStats.totalSolved ? parseInt(previousStats.totalSolved, 10) : 0;

    if (!isNaN(currentSolved) && currentSolved >= previousSolved) {
      console.log("Successfully fetched stats:", stats);
      fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
    } else {
      console.warn(`Validation failed: current solved (${currentSolved}) < previous (${previousSolved}). Skipping overwrite.`);
    }
  } catch (error) {
    console.error("Error updating Codolio stats:", error);
    process.exit(1);
  }
})();
