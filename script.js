/* Button */
// let increase_count = document.getElementById("increase-count")
// let count = 0
// function count_it() {
//     count += 1
//     increase_count.innerText = count
// }

// let saveEl = document.getElementById("save-el")
// function save() {
//     // let entries_txt = " " + count + " - "
//     let entries_txt = " - " + count + " "
//     saveEl.innerText += entries_txt
// }

// let zero = document.getElementById("increase-count")
// function make_0 () {
// zero.innerText = 0
// count = 0
// }





let increase_count = document.getElementById("increase-count");
let count = 0;

function count_it() {
    count += 1;
    increase_count.innerText = count;
}

let saveEl = document.getElementById("save-el");

// function save() {
//     if (saveEl.innerText === "") {
//         saveEl.innerText = count;
//     } else {
//         saveEl.innerText += " - " + count;
//     }
// }

function save() {
    if (saveEl.innerText.trim().length === 0) {
        saveEl.innerText = count;
    } else {
        saveEl.innerText += " - " + count;
    }
}

let zero = document.getElementById("increase-count");

function make_0() {
    zero.innerText = 0;
    count = 0;
}
