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
