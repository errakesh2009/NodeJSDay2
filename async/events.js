console.log("in events.js");
const EventEmitter=require("events");
class MyEmitter extends EventEmitter{
    doTask(callback){
        console.log("starting doTask..");
        this.emit("begin");
        callback();
        this.emit("end");
        console.log("ending doTask..");
    }
}

var myEmitter = new MyEmitter();
myEmitter.on("begin",()=>{console.log("Begin Event...")});
myEmitter.on("end",()=>{console.log("end Event...")});
myEmitter.doTask(()=>{console.log("This is the callback...")});