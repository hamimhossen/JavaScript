function arrayNum(number) {
    let broke = number.split(" ");
    let longestWord = "";
    for (let part of broke) {
        if (part.length > longestWord.length) {
            longestWord = part;
        }
    }
    return longestWord;
}
let result = arrayNum("My Country Name Of bangladesh");
console.log(result);
