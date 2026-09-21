import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BADGES_FILE = path.join(process.cwd(), 'src', 'data', 'codolioBadges.json');

(async () => {
  let browser;
  try {
    let previousBadges = [];
    if (fs.existsSync(BADGES_FILE)) {
      try {
        previousBadges = JSON.parse(fs.readFileSync(BADGES_FILE, 'utf8'));
      } catch (e) {
        console.warn("Could not read previous badges, proceeding without them.");
      }
    }

    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Modern user agent to prevent blocks
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    
    console.log("Navigating to Codolio profile to scrape badges...");
    await page.goto('https://codolio.com/profile/Rohann', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for the SPA to render the data and the Awards section to load
    await new Promise(r => setTimeout(r, 8000)); 

    // Extract all badges
    const badges = await page.evaluate(() => {
      const results = [];
      const imgElements = Array.from(document.querySelectorAll('img'));
      
      for (const img of imgElements) {
        const src = img.src || '';
        const alt = img.alt || '';
        
        // Find if this image is inside a flex column with a date span
        const container = img.closest('.relative.flex.flex-col');
        let dateText = "01 Jan 1970";
        let foundDate = false;
        
        if (container) {
          const spans = Array.from(container.querySelectorAll('span'));
          for (const span of spans) {
            // Check if span text looks like a date (e.g. "30 Apr 2026")
            if (/\d{1,2}\s+[A-Za-z]{3}\s+\d{4}/.test(span.innerText)) {
              dateText = span.innerText;
              foundDate = true;
              break;
            }
          }
        }
        
        // Filter out non-badge images. Badges usually have alt text, or specific src keywords
        if (alt && src && (src.includes('badges') || src.includes('others') || src.includes('marketing') || foundDate)) {
            // Some layout images might have 'badges' in URL, let's also require it's not empty alt
            results.push({ name: alt, url: src, dateStr: dateText });
        }
      }
      return results;
    });

    if (badges.length > 0) {
      // Sort badges by date descending
      badges.sort((a, b) => {
        const dateA = new Date(a.dateStr).getTime() || 0;
        const dateB = new Date(b.dateStr).getTime() || 0;
        return dateB - dateA;
      });

      // Remove the temporary dateStr field to match the original schema
      const finalBadges = badges.map(b => {
        return { name: b.name, url: b.url };
      });

      // Deduplicate by URL
      const uniqueBadges = [];
      const seenUrls = new Set();
      for (const b of finalBadges) {
        if (!seenUrls.has(b.url)) {
          seenUrls.add(b.url);
          uniqueBadges.push(b);
        }
      }

      console.log(`Successfully scraped ${uniqueBadges.length} unique badges.`);
      
      // If we got fewer badges than before by a huge margin, something might have broken
      if (uniqueBadges.length < previousBadges.length - 5) {
        console.warn(`Warning: Found significantly fewer badges (${uniqueBadges.length}) than before (${previousBadges.length}). Overwriting anyway, but might be a scraping issue.`);
      }

      fs.writeFileSync(BADGES_FILE, JSON.stringify(uniqueBadges, null, 2));
    } else {
      console.warn("Could not find any badges. Assuming layout changed or page failed to load. Politely skipping.");
    }
  } catch (error) {
    console.error("Error scraping Codolio badges:", error);
    console.log("Politely skipping due to error.");
    process.exit(0);
  } finally {
    if (browser) await browser.close();
  }
})();
