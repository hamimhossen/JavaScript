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
