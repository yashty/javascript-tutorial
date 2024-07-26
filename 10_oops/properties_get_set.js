function User(email, password){
    this.email = email
    this.password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCae()
        }, 
        set: function(value){
            this.email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCae()
        }, 
        set: function(value){
            this.password = value
        }
    })
}




const chai = new User("y@y.in", "chai")

console.log(chai.email);