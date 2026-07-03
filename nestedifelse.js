let myMarks = 84;
let friendMarks = 54;

if (myMarks > 80) {
    if (friendMarks > 80) {
        console.log("go for lunch");
    } else if (friendMarks < 80 && friendMarks >= 60) {
        console.log("good luck next time");
    } else if (friendMarks < 60 && friendMarks >= 40) {
        console.log("friends message unseen");
    } else if (friendMarks < 40) {
        console.log("block your friends");
    }
} else {
    console.log("sleep and act sad");
}
