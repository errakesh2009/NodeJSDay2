const net=require('net');
const readLine=require('readline');
const readConsole=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

const clientSocket=new net.Socket();
clientSocket.connect(9001,"localhost",()=>{
    console.log("Connected to server...");
    clientSocket.setEncoding('utf8');
    clientSocket.on("data",(data)=>{
        console.log(`Server says: ${data}`);
        //console.log("server says:",data);
        //clientSocket.write("from client:: "+data);
        readConsole.setPrompt("Enter any text t send, exit to terminate>>");
        readConsole.prompt();
    });
    readConsole.on("line",(line)=>{
        if(line =="exit"){
            console.log("exiting...");
            clientSocket.destroy();
            readConsole.close();
        }
        else{
            clientSocket.write(line);
            readConsole.prompt();
        }
    });
});