// var c = 300
let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    console.log("INNEER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "yash"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()

}

// one()

if (true){
    const username = "yash";
    if(username === "yash"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++ interesting +++++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function (num) {
  return num + 1;
};

addTwo(5)