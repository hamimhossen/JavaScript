//find out minimum number of an array
function minNumber(number) {
    let min = number[0];
    for (let num of number) {
        if (min > num) {
            min = num;
        }
    }
    return min;
}
const result = minNumber([45, 67, 89, 32, 56, 67, 45]);
console.log("Minimum number is:", result);
