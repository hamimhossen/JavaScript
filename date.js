const today = new Date();
const date = new Date("2026-05-15");
console.log(date.getMonth());
console.log(date.getDate());

const specificDate = new Date(2091, 5, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString("en-GB"));
