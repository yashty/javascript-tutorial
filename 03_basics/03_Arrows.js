// this => current context
const user = {
    username: "yash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);  // in node environment => empty object

// function chai(){
//     let username = "yash"
//     console.log(this.username);
// }
// chai()
// not able to use this inside function => undefined

// const chai = function() {
//   let username = "yash";
//   console.log(this.username);
// }
// chai();
// not able to use this inside function => undefined


const chai = () => {
  let username = "yash";
  console.log(this);
}
// chai();
// not able to use this inside function => undefined


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) =>  num1 + num2 //implecit return

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "yash"});

console.log(addTwo(3, 4));
