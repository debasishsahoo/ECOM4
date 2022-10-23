const http = require('http');
const server = http.createServer(
    //Request:
    (req, res) => {
        const url = req.url
        console.log('url:', url)
        const method = req.method
        console.log('method:', method)

        if (url === '/') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(`<h1>Home Page</h1>`)
            res.end()
        }
        else if (url === '/about') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(`<h1>About Page</h1>`)
            res.end()
        }
        else if (url === '/info') {
            res.writeHead(201, { 'content-type': 'text/plain' })
            res.write('this is a Text Data')
            res.end()
        }
        else if (url === '/data') {
            res.writeHead(203, { 'content-type': 'text/xml' })
            res.write(`<note>
            <to>Tove</to>
            <from>Jani</from>
            <heading>Reminder</heading>
            <body>Don't forget me this weekend!</body>
            </note>`)
            res.end()
        }
        else {
            res.writeHead(404, { 'content-type': 'text/html' })
            res.write(`<h1>Page not Foud</h1>`)
            res.end()
        }
    }
);
server.listen(7000, () => { console.log(`Server Connected`) })

//Domain => http://localhost
//PORT => 7000
// URL => /home or /user/123 or /prdouct/laptop/hp/omen/intel/i5