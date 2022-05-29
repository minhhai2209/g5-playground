const [page] = await browser.pages();

// Emulates an iPhone X
await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
await page.setViewport({ width: 375, height: 812 });

await page.goto('https://pptr.dev');

await page.close();