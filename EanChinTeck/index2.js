// console.log("Hi");

// let alpha = ["A", "B", "C"];

// console.log(alpha[0]);
// console.log(alpha[1]);
// console.log(alpha[2]);
// console.log(alpha[3]);


// const instruments = [
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];

// instruments[0] = "Roli Seaboard";
// instruments[3] = "Makey Makey Banana Piano";
// instruments[ instruments.length - 1 ] = "OP1";

// console.log(instruments[0]);
// console.log(instruments[1]);
// console.log(instruments[2]);
// console.log(instruments[3]);

// console.log(instruments);


// const instruments = [
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];

// instruments[0] = "Roli Seaboard";
// instruments[3] = "Makey Makey Banana Piano";
// instruments[ instruments.length - 1 ] = "OP1";

// console.log(instruments[0] = "Roli Seaboard");
// console.log(instruments.length);
// console.log(instruments);

// for (let i = 0; i < instruments.length; i++) {
//     console.log(instruments[i]);
// }

// instruments.forEach(e => {
//     console.log(e)
// });


// const ordinals = [
//     "Zeroeth",
//     "First",
//     "Second",
//     "Third"
// ];

// ordinals[0]; // "Zeroeth"
// ordinals[1]; // "First"
// ordinals[2]; // "Second"
// ordinals[3]; // "Third"

// for (let i = 0; i < ordinals.length; i++) {
//     console.log(ordinals[i]);
// }


// const ordinals = [
//     "First",
//     "Second",
//     "Third"
// ];

// ordinals.length; // 3
// ordinals.push("Fourth"); // Add "Third" to the end
// ordinals.pop(); // Remove the last element ("Fourth")
// ordinals.unshift("Zeroeth"); // Add "Zeroeth" to the start
// ordinals.shift(); // Remove the first element ("Zeroeth")
// ordinals.indexOf("Second"); // 1


// let myNumbers = [3, 4];
// add the number 5 to the back of the array
// add 2 to the start of the rray
// remove the last item
// remove the first item

// console.log(myNumbers);
// myNumbers.push(5);
// console.log(myNumbers);
// myNumbers.unshift(2)
// console.log(myNumbers);
// myNumbers.pop()
// console.log(myNumbers);
// myNumbers.shift()
// console.log(myNumbers);


// let rainbowColors = [];

// rainbowColors.push("orange");
// rainbowColors.unshift("red");
// rainbowColors.push("yellow");
// rainbowColors.push("green", "blue", "indigo", "violet");

// console.log(rainbowColors);
// console.log(rainbowColors.length);
// console.log(rainbowColors[1]);
// console.log(rainbowColors[rainbowColors.length-1]);
// console.log(rainbowColors.indexOf("blue"));


// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//     ]
// };

// console.log(bookSeries.rating = 10);
// console.log(bookSeries);

// // console.log(bookSeries.author);
// // console.log(bookSeries.books[4]);

// // log out the whole book series
// for (let i = 0; i < bookSeries.books.length; i++) {
//     console.log(bookSeries.books[i]);
// }

// // log out the 4th books
// console.log(bookSeries.books[3]);


// let course = {
//     topic: "JavaScript"
// };

// console.log(course.topic = "JavaScript Development");
// console.log(course);

// const explorer = {
//     firstName: "Jack",
//     lastName: "Delta",
//     birth: {
//     day: 11,
//     month: 6,
//     year: 1910
//     }
// };

// console.log(explorer.firstName);
// console.log(explorer.lastName);
// console.log(explorer.birth.year);
// console.log(explorer.birth.day);

// const marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
// ];

// for (let i = 0; i < marxFamily.length; i++) {
//     console.log(marxFamily[i].name);
// }

// marxFamily.forEach(e => {console.log(e.name)});


// let bookSeries = [
//     { title: "Book 1", author: "Author 1", alreadyRead: true},
//     { title: "Book 2", author: "Author 2", alreadyRead: false},
//     { title: "Book 3", author: "Author 3", alreadyRead: false},
//     { title: "Book 4", author: "Author 4", alreadyRead: true},
// ];

// for (let i = 0; i < bookSeries.length; i++) {
//     console.log("'" + bookSeries[i].title + "', by " + bookSeries[i].author);
// }

// for (let i = 0; i < bookSeries.length; i++) {
//     if (bookSeries[i].alreadyRead) {
//         console.log('You have already read "' + bookSeries[i].title + '", by ' + bookSeries[i].author);
//     } else {
//         console.log('You still need to read  "' + bookSeries[i].title + '", by ' + bookSeries[i].author + '.');
//     }
// }


let recipe = {
    title: "Ginger, Apple and Banana Smoothie",
    serves: 2,
    ingredients: [
        "500ml Milk",
        "2/3 cups of vanilla protein powder",
        "2 tbs rolled oats",
        "Pinch of cinnamon",
        "2 cups of baby spinach leaves",
        "2 frozen bananas",
        "2 roughly chopped apples",
        "1/2 avocado",
        "2 tsp fresh ginger",
        "6 ice cubes"
    ]
};

let x = "";
for (let i = 0; i < recipe.ingredients.length; i++) {
    x += "- " + recipe.ingredients[i] + " \n";
}

console.log(recipe.title + "\n\nServes: " + recipe.serves + "\n\n" + x);

// console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`)

// recipeCard.forEach(e => {
//     let output = `Title\n${e.title}\n\nServes: ${e.serving}\n\n Ingredients:\n${e.ingredients.join("")}`;
//     console.log(output)
// });