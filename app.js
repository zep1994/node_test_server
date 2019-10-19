//require http 
const http = require("http")

//define where you are connecting to
const hostname = "127.0.0.1"
//what port
const port = "3000"

//now we must create the server 
const server = http.createServer((req, res) => {
    //define response
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain")
    res.end('Hello World\n')
})

//activate the server to listen
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
})