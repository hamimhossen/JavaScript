function products(number) {
    let sum = 0;
    for (let num of number) {
        sum = sum + num.price;
    }
    return sum;
}
const price = products([
    { name: "shampoo", price: 50 },
    { name: "shaban", price: 80 },
    { name: "oil", price: 120 },
    { name: "clothes", price: 340 },
]);
console.log("Total product Price is:", price);
