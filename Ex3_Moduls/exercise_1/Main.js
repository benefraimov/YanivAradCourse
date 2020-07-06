let http = require('http')
let arrUtils = require('./ArrUtils.js')

let sumOfStrings = arrUtils.GetArrLength(['ben','yaniv','arad','win'])
let server = http.createServer(function(req, resp)
{
    resp.writeHead(200, {"Content-type" : "html"})
    resp.write("<html><body>" + sumOfStrings + "</body></html>")
    resp.end()
})

server.listen(8001);