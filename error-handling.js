// let first = "hello";


// try{
//     console.log(first);
//     //your code
// }catch(error){

//     console.log(error);

// }finally{
// console.log("this block will always run");
// }

// console.log("this works");

try{

    if("condition true"){
     throw new Error("hacked");
    }
    
    console.log("first");

    //your code
}catch(error){

    console.log(error);
    //send notification to engg. team

if(error.message === "hacked"){
    console.log('emergency alert text to engg team');
}

}finally{
console.log("this block will always run");
}

console.log("this works");

//setTimeout()

console.log("I am before the setTimeout");

const counter = setTimeout(() => {
    console.log("I am from inside the setTimeout");
}, 1000)

clearTimeout(counter);

// setInterval()

let counter1 = 10;
const countDown = setInterval(() =>{
    console.log('from inside the setInterval', --counter1);

if(counter1 == 0){
    clearInterval(countDown);
    console.log("Happy Birthday");
}

}, 1000);


///// Fun Challange

const yoyo = ( ) => console.log("0. " + (5 + 6));

console.log("1. log");

setTimeout(( ) => {
    console.log("2. inside frist set timeout");
}, 5000);

console.log("3. after first setTime out");

const sayHey = ( ) => {
    console.log("4. inside sayhey");
    yoyo( );
};

setTimeout(( ) => {
    console.log("5. inside second set timeout");
}, 0);

sayHey( );

console.log("6. last clg");