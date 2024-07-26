class User {
    constructor(username){
        this.username = username

}
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const  chai = new Teacher("chai", "chai@chai.in", "123")
chai.addCourse()

const  tea = new User("tea", "chai@chai.in", "123")
tea.logMe()


console.log(chai instanceof Teacher);