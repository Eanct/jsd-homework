// The even/odd reporter
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }



// Multiplication Tables
// for (let i = 1; i <= 12; i++) {
//     console.log(i + " * 9 = " + (i * 9));
// }

// Bonus
// for (let i = 1; i <= 12; i++) {
//     for (let j = 1; j <= 12; j++) {
//         console.log(i + " * " + j + " = " + (i * j));
//     }
// }



// The Grade Assigner
// for (let i = 60; i <= 100; i++) {
//     if (i >= 90) {
//         console.log("For " + i + ", you got an A.");
//     } else if (i >= 80) {
//         console.log("For " + i + ", you got a B.");
//     } else if (i >= 70) {
//         console.log("For " + i + ", you got a C.");
//     } else if (i >= 60) {
//         console.log("For " + i + ", you got a D.");
//     } else {
//         console.log("For " + i + ", you got a F.");
//     }
// }



// Golf
// let par = 5;

// for (let score = 1; score <= 8; score++) {
//     if (score == 1) {
//         console.log("Hole in one");
//     } else if (score <= (par - 2)) {
//         console.log("Eagle");
//     } else if (score == (par - 1)) {
//         console.log("Birdie");
//     } else if (score == par) {
//         console.log("Par");
//     } else if (score == (par + 1)) {
//         console.log("Bogey");
//     } else if (score == (par + 2)) {
//         console.log("Double Bogey");
//     } else if (score >= (par + 3)) {
//         console.log("Not sure");
//     }
// }

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5
// for (let score = 1; score <= 8; score++) {
//     for (let par = 3; par <= 5; par++) {
//         if (score == 1) {
//             console.log("Hole in one");
//         } else if (score <= (par - 2)) {
//             console.log("Eagle");
//         } else if (score == (par - 1)) {
//             console.log("Birdie");
//         } else if (score == par) {
//             console.log("Par");
//         } else if (score == (par + 1)) {
//             console.log("Bogey");
//         } else if (score == (par + 2)) {
//             console.log("Double Bogey");
//         } else if (score >= (par + 3)) {
//             console.log("Not sure");
//         }
//     }
// }



// 99 Bottles of Beer
for (let i = 99; i >= 0; i--) {
    if (i == 2) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " + (i - 1) + " bottle of beer on the wall.");
    } else if (i == 1) {
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
    } else if (i == 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
    } else {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
    }
}