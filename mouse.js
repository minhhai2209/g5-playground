const html = `
    <button>click and hold me</button>
    <ul></ul>
    <script>
      const hms = () => ("" + Date()).slice(16, 24);
      const btnEl = document.querySelector("button");
      btnEl.addEventListener("mousedown", e => {
        document.querySelector("ul").innerHTML +=
          \`<li>mousedown at \${hms()}</li>\`
        ;
      });
      btnEl.addEventListener("mouseup", e => {
        document.querySelector("ul").innerHTML +=
          \`<li>mouseup at \${hms()}</li>\`
        ;
      });
    </script>
  `;
const [page] = await browser.pages();
await page.setContent(html);
await page.click("button", {delay: 5000});
await page.waitForFunction(() => document.querySelector("ul").innerText.includes("mouseup"));
await page.close()