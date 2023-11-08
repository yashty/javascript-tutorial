// For-in loop use in objects
// For-of loop use in arrays


const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple"
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}` );
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map();
// map.set("IN", "India");
// map.set("UAS", "United States of America");
// map.set("Fr", "France");


// for (const key in map) {
//    console.log(key);
// }