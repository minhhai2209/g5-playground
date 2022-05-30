const [page] = await browser.pages();

await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })
await page.type('#search_form_input_homepage', 'Puppeteer')
const searchValue = await page.$eval('#search_form_input_homepage', el => el.value)
    
await page.close();
