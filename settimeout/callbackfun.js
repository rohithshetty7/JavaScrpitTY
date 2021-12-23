function first(calback){

setTimeout(()=>
{
    console.log("first Executed");
    
    calback()
},0)

}
function second(){
    console.log("second function");
}
first(second);