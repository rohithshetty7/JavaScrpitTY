
//21-12-2021
console.log("Date Object");
// Return System date
var systemDate=new Date();
console.log(systemDate);
console.log(systemDate.getFullYear());
console.log(systemDate.getHours());
console.log(systemDate.getDate());
console.log(systemDate.getMonth());
console.log(systemDate.getDay());

// return date by adding millisecond to Jan 1 1970

var dateUsingMilisecondConst=new Date(86400000);
console.log(dateUsingMilisecondConst);

console.log("======================String Constrcutor======================")

var systemDate=new Date('Dec 12 2020');
console.log(systemDate);
console.log(systemDate.getDay());
console.log(systemDate.getFullYear());
console.log(systemDate.getMonth());


// dd//mm//yyyy
var dateVal=systemDate.getDate();
var monthVal=systemDate.getMonth();
var yearVal=systemDate.getFullYear();
console.log(`${dateVal}/${monthVal+1}/${yearVal}`);
// console.log(`${dateVal}-${monthVal+1}-${yearVal}`);
// console.log(`${dateVal}.${monthVal+1}.${yearVal}`)


console.log("---------------------Passing Complete Date & Time-----------------")

// seconds,milliseconds,constructor
var dateObj=new Date(2021,11);//here yy/mm//dd//minute/sec/ms
// console.log(dateObj);
var dateObj1=new Date(2021,10,21);
// console.log(dateObj1);
var dateObj2=new Date(2021,10,21,10,54,56,878);
// console.log(dateObj2);
console.log(dateObj2.getMilliseconds());
console.log(dateObj2.getMinutes());
// console.log()

console.log("---------------------Tuesday 21 2021 format printing -----------------")

var systemDate=new Date('Dec 21 2021');

console.log(systemDate);

var todayDate=systemDate.getDate();
var todayDay=systemDate.getDay();
var todayMonth=systemDate.getMonth();
var todayYear=systemDate.getFullYear();

var months=['Jan','Feb','March','April','May','Jun','July','August','Sept','Oct','Nov','Dec'];

var monthData=months[todayMonth];

var weeks=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

var weekData=weeks[todayDay];
console.log(`${weekData} ${monthData} ${todayDay} ${todayYear}`);


console.log("---------------Date Changing to Local Language------------------------");

var dateObjVal=new Date();
console.log(dateObjVal);
var formattedDate1=dateObjVal.toLocaleDateString('kan-IN',
{
    weekday:'long',
    month:'short',
    year:'numeric',
    day:'numeric'

})
// formattedDate1();
console.log(formattedDate1);








