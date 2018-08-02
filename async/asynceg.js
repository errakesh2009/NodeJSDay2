//class Promise in ES6
function someTask(arg){
    //long running task
    console.log("Starting Task...");
 return new Promise(function(resolve,reject){
    console.log("In Promise...");
        if(arg>50){
            setTimeout(() => {
                var result = arg *2;
                resolve(result);
            }, 2000);
        }
        else{
        setTimeout(() => {
            var result = arg *8;
            reject(result);
        }, 2000);
        }
    });
}

const invokeSomefn= async()=>{
try{
    var result=await someTask(150);
    console.log("result from async",result);
    }catch(err){
        console.log("Error from async",err);
    }
}
invokeSomefn();
// var handle = someTask('10');
// handle.then((result)=>{
//     console.log("Resolved : ",result);
// },(result)=>{
//     console.log("Rejeted : ",result);
// });


//all finishing then only do other job
// Promise.all([Promise.resolve("a"),Promise.resolve("b",someTask(200))])
//         .then((result)=>{
//             console.log("All resolved : ",result);
//         },(result)=>{
//             console.log("All rejected : ",result);
//         });
// //any one of them is resolved/rejected then only do other job
// Promise.race([Promise.resolve("a"),Promise.resolve("b",someTask(200))])
//         .then((result)=>{
//             console.log("All resolved : ",result);
//         },(result)=>{
//             console.log("All rejected : ",result);
//         })
// console.log("Finishing someTask...");