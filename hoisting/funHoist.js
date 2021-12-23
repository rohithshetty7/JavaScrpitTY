// Functional Hoisting

console.log("------Hoisting Naming function--------")
add(20,30)

function add(a,b){
    console.log(a+b);
}



// greet();             //greet is not a function ref notes
var greet=function(){
    console.log("Wel Come");
}
greet();


console.log("------------------------------------")


// product();    //product is not a function
/*
Calling the arrow function before
 assigning the function to variable wiil result in 
 error that is greet is not a fun because the prodct
variable wiil be histed to the top as a product
 */

var product =(a,b)=>{
    console.log(a*b );
}
product(10,2);





