//Variable hoisting 


// console.log(a);  //Uncaught ReferenceError: a is not defined

// var a;
// console.log(a);  //undefined
// a=20;


// console.log(a);  //undefined
// var a=20;





console.log('a -',a);           //undefined
var a=10;
var b=20;
console.log('b outside function-',b);   //20

/*
1. variable Hoisting inside the function.
2. local variable will be given first preferance.
3. If the variable is not declared locally 
JS engine will search the  variable in global scope. 
4. If the variable  declared locally 
JS engine will not  search the  variable in global scope. 
*/
function test(){
    console.log('b inside function- ',b);    //undefined bez here b is defined but not initialzed
    var b=20;
    console.log('a inside function- ',a);      //10
    // var a=20;


}
test();






