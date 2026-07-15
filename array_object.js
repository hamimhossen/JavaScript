let number = [1, 2, 3, 6, 4, 7, 5, 9];
let name = [{}, {}, {}];
let employees = [
    { name: "raf", designation: "content creator", salary: 23000 },
    { name: "saf", designation: "developer", salary: 25500 },
    { name: "haf", designation: "software engineer", salary: 26500 },
    { name: "kaf", designation: "officer", salary: 55500 },
];
employees[2].name = "laf";
employees[1].salary = 35500;

console.log(employees);
console.log(employees[2]);
console.log(employees[2].name);

for (let employee of employees) {
    console.log(employee);
}
for (employee of employees) {
    console.log(employee.name, employee.salary);
}

//take the input of an array and output must be object system
function isSame(number) {
    let sum = 0;
    let avg;
    let len = number.length;
    let pass = 0;
    let fail = 0;
    for (let num of number) {
        sum = sum + num;
        avg = Math.round(sum / len);
        if (num >= 40) {
            pass++;
        }
        if (num <= 40) {
            fail++;
        }
    }
    return {
        finalSore: avg,
        pass: pass,
        fail: fail,
    };
}
const arr1 = isSame([98, 87, 67, 91, 92, 33, 87]);
console.log(arr1);
