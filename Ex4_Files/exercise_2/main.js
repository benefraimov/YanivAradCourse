let http = require('http')
let Utils = require('./fileUtils')


let server = http.createServer(function(req, resp)
{
    resp.writeHead(200, {"Content-type" : "html"})
    resp.end()
})

server.listen(8001);