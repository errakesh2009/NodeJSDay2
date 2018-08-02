//implicit args-> this,arguments
//function statement
function sum(x,y)
{
    console.log("In sum....Sum =",arguments[0]+arguments[1]);
    //console.log("In sum....Sum =",arguments[2]+arguments[3]);
}
sum(2,3);
sum();
sum(2,3,4,5);

//function expression
var add=function(a,b)
{
    console.log("in var fn");
    return a+b;    
}

//arrow function
add=(a,b)=>
{
    console.log("in arrow fn");
    return a+b;
}
//if arrow function is having only one statement
add=(a,b)=>a+b;
//if only one argument then no need or ()


var sqrIt=x=>x*x;

console.log(add(4,8));
console.log(sqrIt(5));

var obj={
    id:100,
    print:function(){
        var _this=this;
        console.log("Id: "+this.id);
        //id will be lost as obj will be called by node api
            setTimeout(function()  {
                console.log("Id after 2 sec: "+this.id);
            }, 2000);
            //bind it with this
            setTimeout(()=>  {
                console.log("Id after 2 sec: "+this.id);
            }, 2000);

            //use of arrow fn
            setTimeout(()=>  {
                console.log("Id after 2 sec: "+this.id);
            }, 2000);
    }
}
obj.print();