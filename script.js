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
let saveEl = document.getElementById("save-el");
let count = 0;
let firstSave = true;

function count_it() {
    count += 1;
    increase_count.innerText = count;
}

function save() {
    if (firstSave) {
        saveEl.innerText = "Previous entries are: " + count;
        firstSave = false;
    } else {
        saveEl.innerText += " - " + count;
    }

    make_0();
}

function make_0() {
    increase_count.innerText = 0;
    count = 0;
}
