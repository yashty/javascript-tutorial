const accountId = 144553
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail= "hc@hc.com"
accountPassword= "22122212"
accountCity= "Bengaluru"

console.log(accountId);

/*
Prefer not user var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity. accountState])