function createGrid(n){
    let e = document.querySelector(".container");
    for(let i = 0; i < n*n; i++){
        let row = document.createElement("div");
        row.className = "gridsquare";
        e.appendChild(row);
    }
}

let n = 16;
let button = document.getElementById("size");

button.addEventListener("click", getPrompt());

function getPrompt() {
    let number = prompt("Enter a number");
    if(number < 4 || number >64){
        alert("Please enter between numbers 4 and 64");
        return;
    }
    n = parseInt(number);
}

let cont = document.getElementById("square");
cont.style.setProperty('grid-template-columns', 'repeat('+n+', 1fr)');



createGrid(n);