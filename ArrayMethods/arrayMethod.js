console.log("-------Push Method--------")

let hobbies=['Sleeping','Coding','Trecking','Birds Watching'];
console.log('Length of Array is ',hobbies.length);  //Length of Array is  4
let hobbiesLength=hobbies.push('Reading');
console.log('Updated array length',hobbiesLength);  //it returns array length that is 5
console.log("After  push --"+hobbies);  //After  push --Sleeping,Coding,Trecking,Birds Watching,Reading
console.log('Hobbies',hobbies.push('cooking')); /// returns array length that is 6
console.log(hobbies);

/*
1.Push method is uded to add last elements to an array.
2.It accept n arguments
3.It return with array length
4.It affect the original Arrays.

*/
console.log("-------Pop Method--------")
let hobby=['Sleeping','Coding','Trecking','Birds Watching'];
console.log(`Hobbies array length is `,hobby.length)
/*
1.Pop method is uded to remove last elements from an array.
2.It has no arguments
3.It return with removed elements
4.It affect the original Arrays.

*/
let popElement=hobby.pop();
console.log(`Removed elemets is -`,popElement);   //Birds Watching
console.log(`After romoving array is  `,hobbies);   //(3) ['Sleeping', 'Coding', 'Trecking']

console.log("-------for Each Method--------");
/*
1.For each method always return undefined;
2.It is used to iterates, array elements, index values.
3.It accect the one arguments that is callback function
4.Callback function accept 3 arg.
            1.Array elements
            2.Index value
            3.Whole array

*/

 hobby=['Sleeping','Coding','Trecking','Birds Watching'];
let output=hobby.forEach(function(value,index,array){
    console.log(`${index}-${value}`);
    

})
console.log(output);


console.log("-------Unshift--------");
// Add the element at start of the array

const lenOfHobbies=hobbies.unshift('Gaming');
console.log('hobbies after unshift', hobbies);
console.log('hobbies length after unshift', lenOfHobbies);



console.log("-------shift--------");
// removes the element at start of the array

const deleteHobby=hobbies.shift();
console.log('Hobbies after shift',hobbies);
console.log('hobbies length after shift', deleteHobby);


console.log("-------typeof--------");
console.log('tyoe of hobbies',typeof(hobbies)) ///Object

console.log("-------isArray--------");
const isHobbiesArray=Array.isArray(hobbies);
console.log('Is hobby is an Array ',isHobbiesArray);


console.log("-------includes--------");

const isIncludesOrNot=hobbies.includes('Coding');
console.log('is coding present',isIncludesOrNot);

/*
It accept 2 arguments
First is search elements
Secons is starting index value
return true/false

*/

console.log("-------indexof--------");

// Checks wheather elements is present or not,
// if present returns the index of elemnt else -1
const indexOfReading=hobbies.indexOf("Reading");
console.log('Index of Reading',indexOfReading);



















