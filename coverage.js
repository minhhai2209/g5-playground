const [page] = await browser.pages();
// Enable both JavaScript and CSS coverage
await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage(),
]);
// Navigate to page
await page.goto('https://example.com');
// Disable both JavaScript and CSS coverage
const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage(),
]);
let totalBytes = 0;
let usedBytes = 0;
const coverage = [...jsCoverage, ...cssCoverage];
for (const entry of coverage) {
    totalBytes += entry.text.length;
    for (const range of entry.ranges) usedBytes += range.end - range.start - 1;
}
console.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);
await page.close();