function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
function subtract(num1, num2) {
    let sub = num1 - num2;
    return sub;
}
function multiply(num1, num2) {
    let multi = num1 * num2;
    return multi;
}
function division(num1, num2) {
    let div = num1 / num2;
    return div;
}
function operations(a, b, operator) {
    if (operator == "add") {
        let result = add(a, b);
        return result;
    } else if (operator == "sub") {
        let result = subtract(a, b);
        return result;
    } else if (operator == "multi") {
        let result = multiply(a, b);
        return result;
    } else if (operator == "div") {
        let result = division(a, b);
        return result;
    }
}
let finalResult = operations(8, 4, "div");
console.log(finalResult);
