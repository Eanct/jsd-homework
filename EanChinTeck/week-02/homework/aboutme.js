// Exercise: More DOM Manipulation
// About Me

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
let body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
document.querySelector("#nickname").innerHTML = "Ean";
document.querySelector("#favorites").innerHTML = "Music";
document.querySelector("#hometown").innerHTML = "Kuantan";

// Iterate through each li and change the class to "list-item". Add a style tag that sets a rule for "list-item" to make the color "red".
function addClass() {
    let listItems = document.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add("list-item");
    }
}

addClass();

let style = document.createElement("style");
style.textContent = ".list-item { color: red; }";

document.head.appendChild(style);

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
let img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/400/500");

document.body.appendChild(img);