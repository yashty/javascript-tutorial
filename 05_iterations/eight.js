const myNums = [1, 2, 3] 
const myTotal = myNums.reduce( (acc, currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
}, 0)

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "cpp course",
    price: 1999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);