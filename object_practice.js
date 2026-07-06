const student = {
    name: "sara",
    id: 186,
    age: 34,
    gender: "male",
    physics: {
        teacher: "joy",
        class: "nine",
        marks: 87,
    },
};
console.log(student.physics.marks);

let count = Object.keys(student).length;
console.log("Total Property: ", count);

let counts = Object.keys(student.physics).length;
console.log("Physics Property: ", counts);

for (const prop in student) {
    console.log(prop);
    console.log(student[prop]);
}
