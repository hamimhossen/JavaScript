//ascending order
let numbers = [5, 7, 3, 2, 8, 1, 9, 4];
numbers.sort();
console.log(numbers);

//ascending order
let names = ["nam", "lon", "mre", "vrh", "pka"];
names.sort();
console.log(names);

//ascending order
let age = [5, 3, 12, 10, 7, 6, 23, 8];
let ascendingAge = age.sort(function (a, b) {
    return a - b;
});
console.log(ascendingAge);

//descending order
let ages = [5, 3, 12, 10, 7, 6, 23, 8];
let descendingAges = ages.sort(function (a, b) {
    return b - a;
});
console.log(descendingAges);
