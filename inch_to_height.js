//inch to height convert without using function
let inch = 75;
let feetNumber = parseInt(inch / 12);
let inchRemaining = inch % 12;
let result = feetNumber + " feet " + inchRemaining + " inch. ";
console.log(result);

//inch to height convert using function
function inchToFeet(inch) {
    let feetNumber = parseInt(inch / 12);
    let inchRemaining = inch % 12;
    let result = feetNumber + " feet " + inchRemaining + " inch. ";
    return result;
}
let yourHeight = inchToFeet(75);
console.log(yourHeight);
