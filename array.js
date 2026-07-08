let numArray = [12, 33, 44, 55, 66, 77];

console.log("Array Elements: ", numArray);

console.log("Array Length: ", numArray.length); //length

console.log("Value of index 3: ", numArray[3]);

let third = numArray[3];
console.log("Value of index 3: ", third);

numArray[2] = 77; //2 index value will be update
console.log("Update Array: ", numArray);

//2D array
let number = [
    [2, 4, 6, 8, 9],
    [5, 3, 7, 1, 3],
    [3, 7, 3, 6, 8],
    [9, 3, 6, 8, 4],
];
for (let num of number) {
    console.log(num);
}

console.log(number[1]);
console.log(number[1][2]);

number[1][3] = 9;
console.log(number[1][3]);

number[1].push(5);
console.log(number[1]);
console.log(number);

number[2].unshift(1);
console.log(number);

delete number[3];
console.log(number);
