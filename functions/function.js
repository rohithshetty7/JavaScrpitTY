// Named function
function add(num1,num2){
    var sum=num1+num2;
    console.log('Sum -',sum);

}
add(12,12);
add(10,18);
add(15,15);
console.log("====Named function======")

function findIsEligibleForVoting(age){
    if(age>=18){
        return true
    }
    else{
        return false
    }
}

function printEligibleOrNot(result){

if(result===true){
console.log("Eligible for Voting");
}
else{
    console.log("Not Eligible for Voting");
}

}

var result=findIsEligibleForVoting(32);
printEligibleOrNot(result);

var result1=findIsEligibleForVoting(14);
printEligibleOrNot(result1);


console.log("====Anonymous  function======")

var findProduct=function(a,b){
    return a*b;
}
console.log(findProduct);//whole function will get print
console.log(findProduct(10,2));


var productVal=findProduct(12,10);
console.log(productVal);


//2nd Example

var person={
    testFunc:function(){
        console.log("test func executed");
    }
}
person.testFunc();
console.log("====Self Invoking function======");
(
    function(a, b){
        var minu = a-b;
        console.log('difference-' , minu);
    }(30,10)
)


console.log("====Arrow function(ES6)======")
var greet=()=>{
    console.log("Greet Function");
    console.log("WElcome");
}
greet();


//2nd expample
console.log("====2nd exmaple====")

var squareOfNumber=num=>num*num;

var result=squareOfNumber(2);
console.log('Result ',result);
console.log(squareOfNumber(3))
  
// 3rd exmaple
console.log("====3rd exmaple====")
var calculateTotalPrice=(price,gstPer)=>{
var totalPrice=(price*gstPer/100)+price
return totalPrice
}

var priceVal=calculateTotalPrice(300,18);
console.log(priceVal);

console.log(calculateTotalPrice(400,18));













