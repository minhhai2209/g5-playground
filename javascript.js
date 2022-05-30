const [page] = await browser.pages();

await page.goto('https://dev.to');

// evaluate will run the function in the page context
await page.evaluate(_ => {
// this will be executed within the page, that was loaded before
document.body.style.background = '#000';
});
    
await page.close();
