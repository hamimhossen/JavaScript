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

//world cup problem
function fifa(num1, num2) {
    let team1 = num1.foul + num1.cardY + num1.cardR;
    let team2 = num2.foul + num2.cardY + num2.cardR;
    if (team1 < team2) {
        return num1.name;
    } else if (team2 < team1) {
        return num2.name;
    } else {
        return "Tie";
    }
}
let object1 = {
    name: "france",
    foul: 8,
    cardY: 4,
    cardR: 1,
};
let object2 = {
    name: "spain",
    foul: 7,
    cardY: 3,
    cardR: 3,
};
let result = fifa(object1, object2);
console.log(result);
