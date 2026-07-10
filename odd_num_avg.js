//sum of total odd number average
function oddAverage(number) {
    let sum = 0;
    let avg;
    let oddNumber = [];
    for (let num of number) {
        if (num % 2 !== 0) {
            oddNumber.push(num);
            sum = sum + num;
        }
        avg = sum / oddNumber.length;
    }
    console.log("Total numbers of array:", number);
    console.log("Total numbers of odd:", oddNumber);
    console.log("Total sum of the odd numbers:", sum);
    return avg;
}
let result = oddAverage([42, 13, 68, 65, 81, 96, 7, 5]);
console.log("Average of the odd numbers:", result);
