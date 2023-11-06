// let score = "33abc" // NaN
// let score = null; // 0
// let score = undefined; // NaN
let score = true;  // 1
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Number()
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// Boolean()
// 1 => true; 0 => false
//  "" => false
// "yash" => true

// String()