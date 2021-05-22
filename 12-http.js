const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my new server !')
  }
  if (req.url === '/about') {
    res.end('Welcome to my About page!!!')
  }
  res.end("Can't find the page you're looking for")
})
server.listen(5000)
