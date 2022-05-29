const [page] = await browser.pages();

await page.goto('https://chercher.tech/practice/popups')

const [fileChooser] = await Promise.all([
  page.waitForFileChooser(),
  page.click("[name='upload']"),
]);
await fileChooser.accept(['/Users/hai.nguyen/Downloads/gen5.png']);

await page.close();
