const student = {
    name: "jeri",
    id: 176,
    age: 23,
    address: "not",
    "vip tour": ["pab", "nat", "khu"],
};
student.age = 21;
student["age"] = 22;
student["vip tour"] = ["dha", "raj", "bar", "syl"];

console.log(student);
console.log(student.name);
console.log(student["name"]);
console.log(student["vip tour"]);

const computer = {
    brand: "lenovo",
    price: 55345,
    processor: "intel",
    hdd: "512gb",
    model: [23, 43, 32, 56],
    level: {
        class: "first",
        group: "o level",
    },
};

delete computer.price; //property delete
console.log(computer);

console.log(computer.model[2]);

console.log(computer.level.class);

//find out keys
const keys = Object.keys(computer);
console.log(keys);

//find out values
const values = Object.values(computer);
console.log(values);

//object using for loop
const mobile = {
    name: "samsung",
    color: "white",
    price: 24500,
    camera: "50px",
    brand: "apple",
};
for (const prop in mobile) {
    console.log(prop);
    console.log(mobile[prop]);
}
