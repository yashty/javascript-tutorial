// array 

//Shallow copy
//Deep copy

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);

//Array Methods

myArr.push(6)
myArr.pop()

myArr.unshift(0)  // insert at start
myArr.shift()

myArr.includes(9)

myArr.indexOf(3)

const newArr = myArr.join() // type => string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);




console.log(Array.isArray("YASH"))
console.log(Array.from("YASH"));
console.log(Array.from({name :"YASH"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));