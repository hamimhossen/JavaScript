//array
let num = [12, 34, 34];
console.log(num);

// //for loop & array by number
let numbers = [12, 16, 45, 78, 34];
for (let num of numbers) {
    console.log(num);
}

//for loop & array by string
let fruits = ["mango", "banana", "litchi", "jackfruit"];
for (let fruit of fruits) {
    console.log(fruit);
}

//while loop
let num = 0;
while (num < 5) {
    console.log("Looping: " + num);
    num++;
}

//while loop
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

//while loop total number of sum
let num = 1;
let sum = 0;
while (num <= 10) {
    sum = sum + num;
    num++;
}
console.log("Sum = " + sum);

//while loop even number of sum
let num = 1;
let sum = 0;
while (num <= 10) {
    if (num % 2 == 0) {
        console.log(num);
        sum = sum + num;
    }
    num++;
}
console.log("Even number of sum = ", sum);

//multiplication table using while loop
let num = 1;
let value = 3;
while (num <= 10) {
    console.log(value + " x " + num + " = " + value * num);
    num++;
}

//1 to 10 multiplication table using while loop
let value = 1;
while (value <= 10) {
    let num = 1;
    while (num <= 10) {
        console.log(value + " x " + num + " = " + value * num);
        num++;
    }
    value++;
}
