import fs from 'fs';
import path from 'path';
import https from 'https';

const BADGES_FILE = path.join(process.cwd(), 'src', 'data', 'codolioBadges.json');

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
    let previousBadges = [];
    if (fs.existsSync(BADGES_FILE)) {
      try {
        previousBadges = JSON.parse(fs.readFileSync(BADGES_FILE, 'utf8'));
      } catch (e) {
        console.warn("Could not read previous badges, proceeding without them.");
      }
    }

    console.log("Fetching Codolio badges directly from API...");
    const profileRes = await fetchJson('https://api.codolio.com/profile?userKey=Rohann');
    const platforms = profileRes.data?.platformProfiles?.platformProfiles || [];

    const extractedBadges = [];

    // Fallbacks for known badge assets that may not have direct icons in the JSON
    const knownIcons = {
      'c': 'https://hrcdn.net/fcore/assets/badges/c-d1985901e6.svg',
      'python': 'https://hrcdn.net/fcore/assets/badges/python-f70befd824.svg',
      'problem solving': 'https://hrcdn.net/fcore/assets/badges/problem-solving-ecaf59a612.svg',
      'arrays': 'https://codolio.com/badges/codestudio_achiever.svg'
    };

    platforms.forEach(p => {
      const list = p.badgeStats?.badgeList || [];
      list.forEach(b => {
        const name = b.displayName || b.name || b.shortName;
        let url = b.icon;

        // Resolve relative LeetCode image paths
        if (url && url.startsWith('/')) {
          url = 'https://assets.leetcode.com' + url;
        }

        // Apply known icon fallback if icon is missing
        if (!url && name) {
          const key = name.trim().toLowerCase();
          if (knownIcons[key]) {
            url = knownIcons[key];
          } else if (p.platform === 'hackerrank') {
            const slug = name.toLowerCase().replace(/\s+/g, '-');
            url = `https://hrcdn.net/fcore/assets/badges/${slug}.svg`;
          } else if (p.platform === 'codestudio') {
            url = 'https://codolio.com/badges/codestudio_achiever.svg';
          }
        }

        if (name && url) {
          extractedBadges.push({
            name,
            url,
            creationDate: b.creationDate || 0,
            platform: p.platform
          });
        }
      });
    });

    if (extractedBadges.length > 0) {
      // Sort badges by creationDate descending
      extractedBadges.sort((a, b) => (b.creationDate || 0) - (a.creationDate || 0));

      // Remove temporary metadata to match expected schema
      const finalBadges = extractedBadges.map(b => ({
        name: b.name,
        url: b.url
      }));

      // Deduplicate by URL
      const uniqueBadges = [];
      const seenUrls = new Set();
      for (const b of finalBadges) {
        if (!seenUrls.has(b.url)) {
          seenUrls.add(b.url);
          uniqueBadges.push(b);
        }
      }

      console.log(`Successfully fetched ${uniqueBadges.length} unique badges.`);

      // Guard: never overwrite if we got significantly fewer badges
      if (previousBadges.length > 0 && uniqueBadges.length < previousBadges.length - 5) {
        console.warn(`Warning: Found fewer badges (${uniqueBadges.length}) than before (${previousBadges.length}). Aborting overwrite to prevent data loss.`);
        return;
      }

      fs.writeFileSync(BADGES_FILE, JSON.stringify(uniqueBadges, null, 2));
      console.log(`Updated ${BADGES_FILE} with ${uniqueBadges.length} badges.`);
    } else {
      console.warn("Could not find any badges from API. Skipping overwrite.");
    }
  } catch (error) {
    console.error("Error fetching Codolio badges:", error);
    process.exit(1);
  }
})();
