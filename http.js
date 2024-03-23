var http = require('http')

http.createServer((req, res) => {
    res.writeHead("200", "not ok");
    res.write("Hello, Welcome To Mern !!\n");
    res.end();
})
.listen(8080)