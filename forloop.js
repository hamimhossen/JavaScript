//normal for loop
for (let i = 1; i <= 5; i++) {
    console.log("Hello World", i);
}

//incremental for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//decremental for loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//total number of sum using for loop
let sum = 0;
for (let i = 1; i <= 10; i++) {
    console.log(i);
    sum = sum + i;
}
console.log("Sum = ", sum);

//even number using for loop
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//multiplication table
let value = 5;
for (let i = 1; i <= 10; i++) {
    console.log(value + " x " + i + " = " + value * i);
}

//multiplication table for 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + i * j);
    }
}

//for loop and break keyword
let sum = 0;
for (let i = 1; i <= 200; i++) {
    console.log(i);
    sum = sum + i;
    console.log("Sum = ", sum);
    if (sum > 100) {
        break;
    }
}

//for loop and continue keyword
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);
}

//for loop continue keyword
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
