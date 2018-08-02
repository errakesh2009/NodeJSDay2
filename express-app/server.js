var express=require('express');
var app=express();

app.use(express.static(__dirname+"/public"));
app.use(function(req,res,next){
    console.log("Testing middleware...");
    //will be called if we want to proceed to serve teh request otherwise req will not be served
   next();
});



app.get("/",(req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h2>Hello Express Application</h2>");
    res.end();
})

app.listen(8080,()=>{
    console.log("Express server started...");
})