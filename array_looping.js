//array of string type
let fruits = ["mango", "jackfruit", "litchi", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array of number type
let numbers = [4, 5, 7, 3, 8, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//array reverse technique1
let numbers = [1, 2, 3, 4, 5, 6];
let reversed = [];
for (let i = 0; i < numbers.length; i++) {
    reversed.unshift(numbers[i]);
}
console.log(reversed);

//array reverse technique2
let number = [3, 4, 5, 6, 7, 8];
let reverse = [];
for (let num of number) {
    reverse.unshift(num);
}
console.log(reverse);

//array reverse technique3
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
