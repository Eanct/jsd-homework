const books = [
    {
        title: "Gödel, Escher, Bach",
        author: "Douglas Hofstadter",
        alreadyRead: false
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        alreadyRead: true
    },
    {
        title: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        alreadyRead: true
    },
    {
        title: "A Life on our Planet",
        author: "David Attenborough",
        alreadyRead: true
    },
    {
        title: "Cosmos",
        author: "Carl Sagan",
        alreadyRead: false
    }
];

// for (let i = 0; i < books.length; i++) {
//     let paragraph = document.createElement("p");
//     paragraph.innerHTML = `${books[i].title} by ${books[i].author}`;

//     if (books[i].alreadyRead == true) {
//         paragraph.style.color = "green";
//     } else {
//         paragraph.style.color = "red";
//     }

//     document.body.appendChild(paragraph);
// }


// Bonus: Use a ul and li to display the books.
let ul = document.createElement("ul");

for (let i = 0; i < books.length; i++) {
    let ul = document.createElement("ul");

    for (let j = 0; j < Object.keys(books[i]).length; j++) {
        let li = document.createElement("li");
        li.innerHTML = `${Object.keys(books[i])[j]}: ${Object.values(books[i])[j]}`;
        ul.appendChild(li);
    }

    if (books[i].alreadyRead == true) {
        ul.style.color = "green";
    } else {
        ul.style.color = "red";
    }

    document.body.appendChild(ul);
}
