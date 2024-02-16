const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to My world')
    }
    if(req.url === '/about') {
        res.end('Here is our About Us Section')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Bhai tu bija koi page par avi gayo che :(</p>
    <a href="/">Back Home</a>
    `)
})

server.listen(5000)