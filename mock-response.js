const [page] = await browser.pages();

await page.setRequestInterception(true)

page.on('request', (request) => {
    if (request.url() === 'https://danube-webshop.herokuapp.com/api/books') {
        request.respond({
        content: 'application/json',
        body: JSON.stringify(mockResponseObject)
        })
    } else request.continue()
})

await page.goto('https://danube-webshop.herokuapp.com/')
    
await page.close();
