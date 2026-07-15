//find the maximum number of an array
function maxNumber(number) {
    let max = number[0];
    for (let num of number) {
        if (max < num) {
            max = num;
        }
    }
    return max;
}
let result = maxNumber([34, 67, 56, 87, 45, 65, 98, 45, 32]);
console.log(result);
