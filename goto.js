const [page] = await browser.pages();

await page.goto('https://news.ycombinator.com', {
  waitUntil: 'networkidle2',
});
    
await page.close();