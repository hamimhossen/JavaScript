//problem-1
let fruits = ["mango", "banana", "orange", "watermelon", "litchi"];
console.log("Element of index 3: ", fruits[3]);
fruits[2] = "jackfruit";
console.log(fruits);

//problem-2
let touristPlace = ["dhaka", "pab", "cum"];
touristPlace.push("chat");
touristPlace.push("bari", "nato");
touristPlace.pop();
console.log(touristPlace);

//problem-3
let book = ["c", "c++", "java", "javascript"];
console.log(book.includes("javascript"));

//problem-4
let arr1 = [4, 5, 6, 7];
console.log(Array.isArray(arr1));
let arr2 = 34;
console.log(Array.isArray(arr2));

//problem-5
let arr3 = [4, 5, 6, 7];
let arr4 = [8, 9, 3, 2];
console.log(arr3.concat(arr4));

//problem-6
let arr5 = [4, 5, 6, 7];
console.log(arr5.join("+"));

//problem-7
let arr6 = ["car", "cycle", "bike", "toyota"];
console.log(arr6.join("|"));
