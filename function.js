function hello() {
    console.log("I am a javascript function");
}
hello(); //call the hello() function

//normal function
function add(num1, num2) {
    let sum = num1 + num2;
    console.log("Sum = " + sum);
}
add(10, 20);
add(20, 30);

//return value
function value(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result = value(10, 20);
console.log("Sum = " + result);

//add,sub,mul,div function
function add(num1, num2) {
    let sum = num1 + num2;
    console.log("Summation = ", sum);

    let sub = num1 - num2;
    console.log("Subtraction = ", sub);

    let mul = num1 * num2;
    console.log("Multiplication = ", mul);

    let div = num1 / num2;
    console.log("Division = ", div);
}
add(20, 10);

//value return by function
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
const num1 = isEven(5);
const num2 = isEven(10);
console.log(num1);
console.log(num2);

console.log(isEven(64));
console.log(isEven(89));

function isEven(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 == 0) {
        console.log("Even Size");
        return true;
    } else {
        console.log("Odd Size");
        return false;
    }
}
let output1 = isEven("dhaka");
console.log(output1);

let output2 = isEven("sylhet");
console.log(output2);

//function of array
function isArray(number) {
    const num = number.length;
    return num;
}
const count = isArray([2, 3, 54, 3, 24, 5]);
console.log(count);

//total number of sum of an array using function
function sumOfNumber(number) {
    let sum = 0;
    console.log(number);
    for (let num of number) {
        sum = sum + num;
    }
    return sum;
}
const total = sumOfNumber([3, 4, 7, 2, 8]);
console.log("Total sum is", total);

//total number of even of an array using function
function sumOfNumber(number) {
    let evens = [];
    for (let num of number) {
        console.log(num);
        if (num % 2 == 0) {
            evens.push(num);
        }
    }
    return evens;
}
const evenNumbers = sumOfNumber([3, 4, 7, 2, 8]);
console.log(evenNumbers);

//total number of sum of even of an array using function
function sumOfNumber(number) {
    let sum = 0;
    for (let num of number) {
        console.log(num);
        if (num % 2 == 0) {
            sum = sum + num;
        }
    }
    return sum;
}
const evenSum = sumOfNumber([3, 4, 7, 2, 8]);
console.log("The even sum is", evenSum);

//find avg number of an array using function
function arrayNumber(number) {
    let sum = 0;
    let avg;
    for (let num of number) {
        sum = sum + num;
    }
    avg = sum / number.length;
    return avg;
}
let result = arrayNumber([2, 5, 7, 9, 10, 6]);
console.log(result);
