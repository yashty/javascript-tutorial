// singleton 
// object.create;


//object literals

const mySym = Symbol("key1")

const jsUser = {
  name: "Yash",
  // "fullname": "Yash Tyagi",
  [mySym]: "myKey1",  // important
  age: 18,
  location: "Jaipur",
  email: "yash@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//to access the value
console.log(jsUser.email);
//should use this one
console.log(jsUser["email"]);
console.log(jsUser["fullname"]);
console.log(jsUser[mySym]);


jsUser.email = "yash@chatgpt.com"
console.log(jsUser["email"]);

// Object.freeze(jsUser)

jsUser.email = "yash@chat.com";
console.log(jsUser["email"]);


jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

/** *         */

