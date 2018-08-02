const net = require('net');
const server=net.createServer();
const sockets=[];
var counter=0;
server.on("connection",(socket)=>{
    var clientId=++counter;
    sockets.push(socket);
    socket.setEncoding('utf8');
    console.log("client connected...");
    socket.write("hello from socket...");
    socket.on("data",(data)=>{
        console.log(`Client says: ${data}`);
        sockets.forEach((sk) => {
            if(sk!=socket){
                sk.write(`Client ${clientId}: ${data}`);
            }
            
        });
        
    });
    socket.on("error",(data)=>{
        console.log(`Client disconnected with error...`);
    });
    socket.on("end",(data)=>{
        console.log(`Client disconnected...`);
    });
});
server.listen(9001,()=>{
    console.log("server started at port 9001");
})