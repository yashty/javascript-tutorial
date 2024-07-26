const User = {
    _email: 'Y@y.in',
    _password: "abc",

        get email(){
            return this._email.toUpperCae()
        },

        set email(value){
            this._email = value
        }
}

const chai = Object.create (User)

console.log(chai.email);