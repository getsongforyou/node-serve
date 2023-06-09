const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})

    res.end('hello,world!')
}).listen(8080)

console.log('serve run at 8080')