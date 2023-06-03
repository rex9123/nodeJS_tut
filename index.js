const http = require('http')
http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify({name:'Rex', email:'rex121@test.com'}))
    res.end
}).listen(5500)