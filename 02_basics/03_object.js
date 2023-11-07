// singleton object
// const tinderUser = new Object()

// non singleton object
const tinderUser = {}; 

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",

  fullname: {
    userfullname: {
      firstname: "yash",
      lastname: "tyagi",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b" }

// to merge two objects
const obj3  = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}

console.log(obj3);


const users = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
];

users[1].email


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// destructuring

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Yash"
}


// course.courseInstructor

const {courseInstructor: instructor} = course
console.log((instructor));

// {
//   "name": "yash",
//   "coursename": "js in hindi",
//   "price": "999",
// }

// [
//   {}
// ]