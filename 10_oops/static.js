class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createdIn(){
        return `123`
    }
}

const yash = new User("YASH")
console.log(yash.createdIn());





// static -> to not give access