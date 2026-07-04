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
