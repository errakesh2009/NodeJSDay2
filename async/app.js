// setTimeout(function(){
//     console.log("in timeout of 01 sec")
// },0)
console.log('Starting app...');
function process(callback)
{
    console.log("In Process Started..");
    callback();
    console.log("In Process Completed..")
}

process(function(){console.log("In process callback..");});

setTimeout(function(){
    console.log("in timeout of 3 sec")
},3000)

setTimeout(function(){
    console.log("in timeout of 0 sec")
},0)


console.log('Finishing app...');