let ticketFare = 800;
let age = 72;
let student = false;

if (age < 10) {
    console.log("Ticket Fare: free");
} else if (student == true) {
    let discount = (800 * 50) / 100;
    let studentFare = ticketFare - discount;
    console.log("Student Ticket Fare: " + studentFare + "Tk");
} else if (age >= 60) {
    let discount = (800 * 15) / 100;
    let totalFare = ticketFare - discount;
    console.log("Ticket Fare: " + totalFare + "Tk");
} else {
    console.log("Ticket Fare: " + ticketFare + "Tk");
}
