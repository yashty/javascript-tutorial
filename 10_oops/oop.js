const user ={
    username: "yash",
    loginCount: 9,
    signedin: true,

    getUserDetails: function(){
        console.log(`this.Username: ${username}`);
    }
}

console.loguser(user.username);

function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn,

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("yash", 12, true)
const userTwo = new User("yh", 12, true)

// new
// - first empty object create called instance (new object created)
// - constructor function is called due to new keyword
// - all the passed on things addeed to this

// instanceof keyword