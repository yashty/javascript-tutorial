// let myName = "yash    "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.yash = function(){
    console.log(`yash is present in all objects`);
}


Array.prototype.heyYash = function(){
    console.log(`Yash says Hello`);
}

// heroPower.yash()

// myHeros.yash()

// inhertance

const User = {
    name: 'chai',
    email: 'chai@chai.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// morden syntax

Object.setPrototypeOf(TeachingSupport, Teacher)




let anotherUsername = "yash     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"vandana".trueLength()