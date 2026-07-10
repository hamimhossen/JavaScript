//toLowerCase() && toUpperCase()
const firstBook = "Chemistry";
const secondBook = "chemistry";

console.log(firstBook.toLowerCase());
console.log(firstBook.toUpperCase());

if (firstBook.toLowerCase() == secondBook.toLowerCase()) {
    console.log("I am reading the book,because i will pass the exam");
} else {
    console.log("I don't fail the exam");
}

//trim()
const firstWord = "water";
const secondWord = "water  ";

if (firstWord.trim() == secondWord.trim()) {
    console.log("The word are same");
} else {
    console.log("The word are different");
}

//spilt()
const country = "Bangladesh india nepal china pakistan";
console.log(country.split(" "));
console.log(country.split("a"));

//concat()
const firstName = "jeri";
const lastName = "sara";
console.log(firstName + " " + lastName);
console.log(firstName.concat(" ").concat(lastName));

//string character wise reverse
let reverse = "";
let sentence = "I am learning web development";
for (let letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);

//word wise reverse
let colors = "I love JavaScript";
let res = colors.split(" ");
let reverse = "";
for (let name of res) {
    reverse = name + " " + reverse;
}
console.log(reverse);
