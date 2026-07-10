let a = 5;
let b = 8;
console.log("Before swapping:", a, b);

let temp = a;
a = b;
b = temp;
console.log("After swapping:", a, b);

//swap without team variable
let x = 4;
let y = 9;
console.log("Before swapping:", x, y);

[x, y] = [y, x];
console.log("After swapping:", x, y);
