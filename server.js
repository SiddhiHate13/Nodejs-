var http = require('http')

http.createServer((req, res) => {
    res.writeHead("200", "not ok");
    res.write("Hello, Welcome To Mern !!\n");
    res.end();
})
.listen(8080)



const https = require('https');

http.createServer((request, response) => {
    response.writeHead(302, { 'Location': 'http://www.google.com' });
    response.end();
})
.listen(8082);