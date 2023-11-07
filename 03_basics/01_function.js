function sayName(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

  let result = number1 + number2;
  return result
}

const result = addTwoNumbers(3, 4)

console.log("Result: ", result);

function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Yash"));


// shopping cart example

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "yash",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
     username: "yash",
     price: 199
});


const mynewArray = [200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 300, 400]));