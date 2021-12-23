// 22 DEC 2021
// for OF Loop using for array
console.log("=====For of Loop===========");
var number=[10,20,30,40,50];

for(var num of number){
console.log(num);
}

// For Loop for arry or string
var fruits=["Apple","Mango","Orrange","PineApple","Banana"];
for(var fruit of fruits){
console.log(fruit);
}

// for in loop using for Object as well as array

console.log("=====for in loop using for Object=====")
var person={
    firstName:"Ajith",
    lastName:'Kumar',
    age:56,
    gender:"Male"
    
}

for (var key in person){
console.log(`${key }-${person[key]}`)
}


console.log("=====for in loop using with Array=====")

var numbers=[10,20,30,40,50];
for(var index in numbers){
console.log(`value at index ${index}-${numbers[index]}`);

}


console.log("---------------------------")
function test(){
    console.log("test func started");

    if(3<3){
    console.log(i);
    }
    else{
        /*
        Illegal break statement
        break statement can be used
         in loops or switch cases.
         It canot be used in function
          or if else staments without loops
        //break; 
        */
        console.log("break");

    }
    console.log("test func end");

}
test();

/* Does not gnores empty 
elements
(REF PDF DOC PAGE NUM 12)*/
console.log("---------------------------")
var arr=[10,20,30,40,50,,,,,,,,100];
console.log(arr);
for(var i=0;i<arr.length;i++){
console.log(`${i}-${arr[i]}`)

}

/* gnores empty 
elements
 (REF PDF DOC PAGE NUM 12)*/
for (var index in arr){
    console.log(`${index}-${arr[index]}`)

}

console.log("---------------------------")
// ignores the elements which does not have index
var arrData=[10,20,30];
arrData[3]=80;
arrData['price']=600;
console.log(arrData);

for (var i=0;i<arrData.length;i++){
console.log(`${i} - ${arrData[i]}`);
}
console.log("=======Does not Ignores the elements which does not have index================")
for (var i in arrData){
    console.log(`${i}-${arrData[i]}`)
}


console.log("--------ASSIGNMENT---------")

// for of loop if type===='ball point '



var pens=[{
    brand:'Parker',
    color:"black",
    price:125,
    type:"Ball point pen"
},{
brand:'Reynolds',
color:"blue",
price:10,
type:"Ball point pen"
},{
    brand:'Elkos',
    color:"red",
    price:5,
    type:"gel pen"

}]    
console.log("======for loop if price>5=======");

for(var i=0;i<pens.length;i++){
    if(pens[i].price>5){
    console.log(pens[i]);
    }
}

console.log("======for of  loop if type=='ball point pen' && price>5=======");

for(var i of pens){
// console.log(i);
if(i.price>5 && i.type==="Ball point pen"){
console.log(i);
}

}
console.log("For in loop if brand length>5 && price>5 &&price >10")


for(var index in pens){
if((pens[index].brand.length>5) && (pens[index].price>10 )){
    console.log(pens[index]);

}

}






