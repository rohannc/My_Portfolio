import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const STATS_FILE = path.join(process.cwd(), 'src', 'data', 'codolioStats.json');

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Modern user agent to prevent blocks
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    
    console.log("Navigating to Codolio profile...");
    await page.goto('https://codolio.com/profile/Rohann', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for the SPA to render the data
    await new Promise(r => setTimeout(r, 8000)); 

    // Extract all stats
    const stats = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      
      let totalSolved = null;
      let globalRank = null;
      let rating = null;
      let maxStreak = null;
      let contestsAttended = null;
      
      for (let el of elements) {
        if (!el.innerText) continue;
        
        // Match Questions Solved
        if (/(?:problems?|questions?)\s*solved/i.test(el.innerText)) {
          const numbers = el.innerText.match(/\d+/g);
          if (numbers) {
            for (let numStr of numbers) {
              const num = parseInt(numStr, 10);
              if (num > 1000 && num < 10000) totalSolved = numStr;
            }
          }
        }
        
        // Match Global Rank
        if (/global\s*rank/i.test(el.innerText)) {
          const numbers = el.innerText.match(/\d+/g);
          if (numbers) {
            for (let numStr of numbers) {
              const num = parseInt(numStr, 10);
              if (num > 1000 && num < 20000) globalRank = numStr;
            }
          }
        }
        
        // Match Rating
        // Need to be careful to not just grab the max rating text or the axis labels
        if (/rating/i.test(el.innerText)) {
          const numbers = el.innerText.match(/\d+/g);
          if (numbers) {
            for (let numStr of numbers) {
              const num = parseInt(numStr, 10);
              if (num > 1000 && num < 3000) rating = numStr;
            }
          }
        }
        
        // Match Max Streak
        if (/max\.?\s*streak/i.test(el.innerText)) {
          const numbers = el.innerText.match(/\d+/g);
          if (numbers) {
            for (let numStr of numbers) {
              const num = parseInt(numStr, 10);
              if (num > 10 && num < 2000) maxStreak = numStr;
            }
          }
        }
        
        // Match Contests Attended
        if (/contests?\s*attended/i.test(el.innerText)) {
          const numbers = el.innerText.match(/\d+/g);
          if (numbers) {
            for (let numStr of numbers) {
              const num = parseInt(numStr, 10);
              if (num > 0 && num < 1000) contestsAttended = numStr;
            }
          }
        }
      }
      
      return {
        totalSolved,
        globalRank,
        rating,
        maxStreak,
        contestsAttended
      };
    });

    if (stats.totalSolved) {
      console.log(`Successfully scraped stats:`, stats);
      fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
    } else {
      console.warn("Could not find total solved. Assuming layout changed or page failed to load.");
      console.warn("Raw extracted:", stats);
      // Do not overwrite with a blank value, keep the old file if it fails to scrape
    }
  } catch (error) {
    console.error("Error scraping Codolio:", error);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
})();
