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

// console.log(this);

// function chai(){
//     let username = "yash"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//   let username = "yash";
//   console.log(this.username);
// }
// chai();


const chai = () => {
  let username = "yash";
  console.log(this);
}
// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) =>  num1 + num2 //implecit return

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "yash"});

console.log(addTwo(3, 4));