const http=require('http');
var server = http.createServer();

server.on("request",(req,res)=>{
    console.log("Handling request..");
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h2>Hello from web app</h2>');
    res.end();
});
server.listen(8080,()=>{
    console.log("http server started");
})