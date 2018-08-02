console.log('In tasks.js...');

var fs=require('fs');

function writeTask(taskName,desc){
var task={
        taskName,
        desc
    }
    var tasks=[];
    // readTasks()
    // .then((data)=>{
    //     tasjs=data;
    // },

    tasks.push(task);

    //time for promise
   return new Promise(function(resolve,reject){    
        fs.writeFile("tasks.json",JSON.stringify(tasks),(error)=>{
            if(error){
                console.log("Some Error : ",error);
                reject(error);
            }
            else{
                resolve("done");
            }
        });
    })    
}
function readTasks()
{
    return new Promise(function(resolve,reject){
        fs.readFile("./tasks.json",(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(JSON.parse(data));
            }
        });
    });
    
}

module.exports = {writeTask,readTasks};