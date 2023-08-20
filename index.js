let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("entries");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

let message = "You have some new notifications"
function save() {
    //console.log(count + " " + message);
    let temp = count + ' - ';
    saveEl.textContent += temp;
    count = 0;
    countEl.textContent = 0;
}