console.log("In the Tasks Application");

const yargs=require('yargs');
const fs=require('fs');
// const tasks = require("./tasks");
const tasks = require("./asynctasks");
yargs
    .command("add","To add anew Task",()=>{
            return yargs.options( {
                task:{
                    describe:"the task name",
                    demand:true,
                    alias:"t"
                },
                desc:{
                    describe:"the task description",
                    demand:true,
                    alias:"d"
                }
            }
            )})
    .command("list","To list all Tasks")
    .help();

    process.on("uncaughtException",(err)=>{
        console.log("uncaughtException error :",err);
        process.exit(-1);
    });
//console.log(process.argv);
console.log(yargs.argv);

tasks.taskEmitter.on("data",(data)=>{
console.log("In the data event");
data.forEach(item=>{
        console.log(`task name:${item.taskName}`);
        console.log(`Description:${item.desc}`);
    });
});

// tasks.taskEmitter.on("error",(err)=>{
//     console.log("In the error event");
//     console.log("try adding some data");
// });

const command= process.argv[2];
if(command==="add"){ 
   var taskName=yargs.argv.task;
   var desc = yargs.argv.desc;
    console.log('Add Mode',taskName,desc);
    
    // var task={
    //     taskName:taskName,
    //     desc:desc
    // };
    //fs.writeFileSync("tasks.json",JSON.stringify(task));

    //with promise
    tasks.writeTask(taskName,desc)
    .then((task)=>{console.log("task added",task)},(err)=>{console.log("error: ",err)});
}
else if(command==="list"){
    console.log('List Mode');
    // tasks
    // .readTasks()
    // .then((data)=>{
    //     data.forEach(element => {
    //         console.log(element); 
    //     });
    //    // console.log(data);
    // },(err)=>{        
    //     console.log("some error: ",err);
    // });

    //with event 
    tasks.readTasks();

}
else{
    console.log('Unknown Mode');
}