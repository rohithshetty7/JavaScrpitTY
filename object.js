var person={
    firstName:"Yash",
    lastName:"Kumar",
    gender:"Male",
    age:36,
    isMarried:true,
    getFullName:function(){
        return this.firstName+" "+ this.lastName
    }
}



//Accessing properties of Object
console.log(person)

var pName=person.firstName;
console.log("First Name is "+pName);
console.log(`First Name ${pName}`)



var pSurName=person.lastName;
console.log("Last Name is "+pSurName);


var pGender =person.gender;
console.log('Gender is ',pGender);

var pAge=person.age;
console.log('Age is ',+pAge);


var pMarried=person.isMarried;
console.log(pMarried);

var pFullDetails=person.getFullName();
console.log('Full Name is ',pFullDetails );

console.log("============================================================");

var marker={
    color:'black',
    height:'10cm',
    'pri ce':25
}
//Another way of accessing the properties of objects.
console.log(marker['pri ce']);
console.log(person['getFullName']());//To execute function 

console.log("===========================================================");






