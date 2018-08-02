var x = 10;
var y;
console.log("x: ", x);
console.log("y: ", y);
//console.log("z: ", z);

function fn()
{
    var x=50;
    console.log("x in fn:",x);
    // if(x< 100)
    // {
    //     var message="Hello";
    // }
    if(x< 100)
    {
        let message="Hello";
        console.log("message",message);//OK
    }
    //console.log("message",message);//error
}
fn();