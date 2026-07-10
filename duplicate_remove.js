function duplicate(arrayNumber) {
    let unique = [];
    for (let num of arrayNumber) {
        if (unique.includes(num) === false) {
            unique.push(num);
        }
    }
    console.log("Current array:", arrayNumber);
    return unique;
}
let result = duplicate([2, 3, 4, 2, 5, 6, 4, 5, 8]);
console.log("Unique array:", result);
