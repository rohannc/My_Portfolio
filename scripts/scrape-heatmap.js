import fs from 'fs';
import https from 'https';
import puppeteer from 'puppeteer';
import path from 'path';

const getGithubData = () => {
  return new Promise((resolve, reject) => {
    https.get('https://github.com/users/rohannc/contributions', (res) => {
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
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  console.log('Loading Codolio profile...');
  await page.goto('https://codolio.com/profile/Rohann', { waitUntil: 'domcontentloaded', timeout: 30000 });
  try {
    await page.waitForSelector('rect', { timeout: 15000 });
    console.log('Heatmap loaded.');
  } catch (e) {
    console.log('Timeout waiting for heatmap to load. Proceeding with DOM content anyway.');
  }
  await new Promise(r => setTimeout(r, 2000)); // wait a bit more for tooltips
  const html = await page.content();
  console.log(`HTML Length: ${html.length}`);
  await browser.close();

  const stats = {};
  const rectMatches = html.match(/<rect[^>]*data-tooltip-content="([^"]+)"[^>]*>/g) || [];
  rectMatches.forEach(rect => {
    const textMatch = rect.match(/data-tooltip-content="([^"]+)"/);
    if (textMatch) {
      const text = textMatch[1];
      const parts = text.split(' on ');
      if (parts.length === 2) {
        let countText = parts[0];
        let dateText = parts[1]; // DD/MM/YYYY
        
        let count = 0;
        if (!countText.toLowerCase().includes('no ')) {
          count = parseInt(countText.split(' ')[0], 10) || 0;
        }
        
        // Convert DD/MM/YYYY to YYYY-MM-DD
        const dateParts = dateText.split('/');
        if (dateParts.length === 3) {
          const [d, m, y] = dateParts;
          const formattedDate = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
          stats[formattedDate] = count;
        }
      }
    }
  });
  console.log(`Fetched ${Object.keys(stats).length} days of Codolio data`);
  return stats;
};

const main = async () => {
  try {
    console.log('Fetching GitHub Data...');
    const githubData = await getGithubData();
    
    console.log('Fetching Codolio Data...');
    const codolioData = await getCodolioData();

    // Merge data by date using GitHub as the primary timeline (365 days)
    const mergedData = [];
    
    // Sort all available dates from github
    const allDates = Object.keys(githubData).sort();
    let maxTotal = 0;

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

    // Output to src/data/heatmapStats.json
    const outputPath = path.join(process.cwd(), 'src', 'data', 'heatmapStats.json');
    const finalData = {
      maxTotal,
      days: mergedData
    };

    fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
    console.log(`Successfully wrote heatmap data to ${outputPath}`);

  } catch (error) {
    console.error('Error running scraper:', error);
    process.exit(1);
  }
};

main();
