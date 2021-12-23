// Basic of Array
var names = ["Puneeth", "Darshan", "Sudeep", "Rakshith", "Ajith", "Rajkumar"];
console.log(names);
console.log(`Length of array is ${names.length}`);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]); //Undefined
console.log("====================");
console.log(names[0], names[1], names[2], names[3]);
console.log("====================");
for (var i = 0; i < names.length - 1; i++) {
  // debugger
  console.log(names[i]);
}
console.log("====================");
// Heterogenus Array
var myArray = [
  "Ajay",
  34,
  true,
  undefined,
  null,
  { color: "black" },
  ["black", "blue", "red"],
];
console.log(myArray[2]); //true
console.log(myArray[4]); //null
console.log(typeof myArray[3]); //undefined
console.log(myArray.length); //7
console.log(myArray[5].length); //undefined
console.log(myArray[5].color); //black
console.log(myArray[5]["color"]); //black
console.log(myArray[5]["co lor"]); //
// console.log(myArray[6]);
console.log(myArray[6].length);
console.log(myArray[6][0]);
console.log(myArray[6][2 - 1]);

console.log("--------------------");
var books = [
  {
    author: "Chethan Bhagath",
    tittle: "Two States",
    price: 80,
    noOfPages: 265,
    publishers: "Sapna",
  },
  {
    author: "Paulo Cohello",
    tittle: "Alchemist",
    price: 150,
    noOfPages: 250,
    publishers: "Harpher Torch",
  },
  {
    author: "PoornaChandra Tejaswi",
    tittle: "Chidambaea Rahasya",
    price: 340,
    noOfPages: 500,
    publishers: "Sahithya Bhandara",
  },
];
console.log(books[0]);

console.log(books[1]);
console.log(books[2]);

for (var i=0;i<books.length;i++){
console.log(books[i])
}
console.log(books)

for (var book of books ){
    console.log(book.author);
    // console.log(book.noOfPages);
 }
console.log(
  "----------------------------------------------------------------------"
);
// CREATIMNG ARRAY USING NEW KEAYWORD

var arr = new Array(10); ///Here passing only one value so that is length of an array
console.log(arr.length); //10
console.log(arr[0]); //Undefined

console.log( "----------------------------------------------------------------------");
var number = new Array(10, 20); //Here passing multiple value so that is array elements
console.log(number.length);
console.log(number[0]);
console.log(number[1]);

console.log( "----------------------------------------------------------------------");

var color = new Array("blue");//here blue is a values
console.log(color.length); //1
console.log(color[0]);  //blue

console.log( "----------------------------------------------------------------------");



// CREATIMNG OBJECT USING NEW KEAYWORD

var car=new Object();
car.price=40000;
car.model=2021;
car.brand="Toyota";
car.Cname="Fortuner";
car.color='Pink';
console.log('car details', car);
console.log(`Car price is  ${car.price}`);
console.log(car.Cname);
console.log(car.brand);
console.log(car.model);
console.log(car.color);

console.log( "----------------------------------------------------------------------");









