console.log('In async tasks.js...');

const fs=require('fs');
const EventEmitter = require("events");
class TaskEmitter extends EventEmitter
{

}
const taskEmitter = new TaskEmitter();




function writeTask(taskName,desc){
var task={
        taskName,
        desc
    }
    var tasks=[]; 
return new Promise(async function(resolve,reject){
    try{
        var data = await readTasks();
        tasks=data;
    }
    catch(err){
        tasks=[];
    }

    tasks.push(task);
    fs.writeFile("tasks.json",JSON.stringify(tasks),(error)=>{
        if(error){
            console.log("Some Error : ",error);
            reject(error);
        }
        else{
            resolve("done");
        }
    });

});
    
}
function readTasks()
{
    return new Promise(function(resolve,reject){
        fs.readFile("./tasks.json",(err,data)=>{
            if(err){
               // reject(err);
                taskEmitter.emit("error",err);
            }
            else{
                resolve(JSON.parse(data));
                taskEmitter.emit("data",JSON.parse(data));
            }
        });
    });
    
}

module.exports = {writeTask,readTasks,taskEmitter};