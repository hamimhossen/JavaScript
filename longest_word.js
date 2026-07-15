//find out longest word using function
function first(number) {
    let news = number.split(" ");
    let longestWord = "";
    for (let num of news) {
        if (num.length > longestWord.length) {
            longestWord = num;
        }
    }
    return longestWord;
}
let result = first("I am a web developer man");
console.log(result);
