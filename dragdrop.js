const [page] = await browser.pages();
await page.goto('https://pptr.dev');
await page.waitForSelector('sidebar-component');

// Drags the mouse from a point
await page.mouse.move(0, 0);
await page.mouse.down();

// Drops the mouse to another point
await page.mouse.move(100, 100);
await page.mouse.up();
await page.close();