import fs from 'fs';
import https from 'https';
import path from 'path';

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

const getGithubData = () => {
  return new Promise((resolve, reject) => {
    https.get('https://github.com/users/rohannc/contributions', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const stats = {};
        const tooltips = {};

        const tooltipMatches = data.match(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g) || [];
        tooltipMatches.forEach(t => {
          const idMatch = t.match(/for="([^"]+)"/);
          const textMatch = t.match(/>([^<]+)</);
          if (idMatch && textMatch) {
            tooltips[idMatch[1]] = textMatch[1];
          }
        });

        const tdMatches = data.match(/<td[^>]*data-date="([^"]+)"[^>]*id="([^"]+)"[^>]*>/g) || [];
        tdMatches.forEach(td => {
          const dateMatch = td.match(/data-date="([^"]+)"/);
          const idMatch = td.match(/id="([^"]+)"/);
          if (dateMatch && idMatch) {
            const date = dateMatch[1]; // YYYY-MM-DD
            const id = idMatch[1];
            let count = 0;
            if (tooltips[id]) {
              const text = tooltips[id];
              if (!text.toLowerCase().includes('no ')) {
                count = parseInt(text.split(' ')[0].replace(/,/g, ''), 10) || 0;
              }
            }
            stats[date] = count;
          }
        });
        console.log(`Fetched ${Object.keys(stats).length} days of GitHub data`);
        resolve(stats);
      });
    }).on('error', reject);
  });
};

const getCodolioData = async () => {
  console.log('Fetching Codolio platform submission calendars via API...');
  const profileRes = await fetchJson('https://api.codolio.com/profile?userKey=Rohann');
  const platforms = profileRes.data?.platformProfiles?.platformProfiles || [];

  const stats = {};
  platforms.forEach(p => {
    const calendar = p.dailyActivityStatsResponse?.submissionCalendar;
    if (calendar) {
      Object.entries(calendar).forEach(([timestamp, count]) => {
        const date = new Date(parseInt(timestamp, 10) * 1000).toISOString().split('T')[0];
        stats[date] = (stats[date] || 0) + (parseInt(count, 10) || 0);
      });
    }
  });

  console.log(`Aggregated Codolio submissions across ${Object.keys(stats).length} unique active days`);
  return stats;
};

const main = async () => {
  try {
    console.log('Fetching GitHub Data...');
    const githubData = await getGithubData();

    console.log('Fetching Codolio Data...');
    const codolioData = await getCodolioData();

    // Use GitHub's standard 365-day rolling timeline
    const allDates = Object.keys(githubData).sort();
    if (allDates.length === 0) {
      throw new Error("No dates retrieved from GitHub contributions");
    }

    let maxTotal = 0;
    const mergedData = [];

    for (const date of allDates) {
      const ghCount = githubData[date] || 0;
      const codCount = codolioData[date] || 0;
      const total = ghCount + codCount;
      if (total > maxTotal) maxTotal = total;

      mergedData.push({
        date,
        github: ghCount,
        codolio: codCount,
        total
      });
    }

    const outputPath = path.join(process.cwd(), 'src', 'data', 'heatmapStats.json');
    const finalData = {
      maxTotal,
      days: mergedData
    };

    fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
    console.log(`Successfully wrote heatmap data for ${mergedData.length} days to ${outputPath}`);
  } catch (error) {
    console.error('Error running heatmap generator:', error);
    process.exit(1);
  }
};

main();
