const [page] = await browser.pages();

await page.setRequestInterception(true)

page.on('request', (request) => {
    if (request.url() === 'https://danube-webshop.herokuapp.com/api/books') {
        const mockResponseObject = [
            {
                id: 1,
                title: 'How to Mock a Response',
                author: 'A. Friend',
                genre: 'business',
                price: '0.00',
                rating: '★★★★★',
                stock: 65535
            }
        ]
        request.respond({
            content: 'application/json',
            body: JSON.stringify(mockResponseObject)
        })
    } else request.continue()
})

await page.goto('https://danube-webshop.herokuapp.com/')

await page.close();
