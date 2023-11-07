// Immediately Invoked Function Expressions (IIFE) ()()

// jaise hi file start ho to usa execute karna ex. database file

// global scope ka pollution se problem hoti hai to ussa bacna ka liya we use iffe

(function chai(){
    // named iffe
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('yash')