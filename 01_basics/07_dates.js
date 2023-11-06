// Dates

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log( typeof myDate);

// let myCreateDate = new Date(2023, 0 , 23)
let myCreateDate = new Date("01-14-2023");
console.log(myCreateDate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long",
})