function phones(number) {
    let min = number[0];
    for (let num of number) {
        if (min.price > num.price) {
            min = num;
        }
    }
    return min;
}
let minPrice = phones([
    { name: "samsung", price: 34500, camera: "54mp", color: "black" },
    { name: "xiaomi", price: 24500, camera: "48mp", color: "white" },
    { name: "nokia", price: 52000, camera: "54mp", color: "black" },
    { name: "symphony", price: 20500, camera: "44mp", color: "green" },
    { name: "walton", price: 15500, camera: "42mp", color: "red" },
]);
console.log("Low Budget Phone is:", minPrice);
