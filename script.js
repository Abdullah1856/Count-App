// document.getElementById("count-peoples").innerText = 10

// let count = 10
// console.log(count)

// let myAge = 20
// console.log(myAge)

// const myAge = 20
// const humanCatRatio = 7
// let mycatAge = myAge * humanCatRatio
// console.log(mycatAge);

// let bonusPoint = 50
// bonusPoint = bonusPoint + 50
// bonusPoint = bonusPoint - 75
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

/*
 function increment() {
 console.log("The button is pressed")
 }

 function myFirstFunction() {
     console.log(42)
}
myFirstFunction()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapSum () {
console.log(lap1 + lap2 + lap3)
}
lapSum()


let lapsCompleted = 0

function increaseLaps() {
    lapsCompleted = lapsCompleted + 1
}

increaseLaps()
increaseLaps()
increaseLaps()

console.log(lapsCompleted)



let countPeoples = document.getElementById("count-peoples")

let increment = 0
function increaseIncrement() {
    increment = increment + 1
    countPeoples.innerText = increment
}

*/


/* Txt Changes */
/*
let txtgreetings = document.getElementById("txt_greetings")

let message = "You have three new notifications"

let greetings = "Hello Abdullah, "

txtgreetings.innerText = greetings + message

txtgreetings.innerText += " !"
*/

/* Button */
let increase_count = document.getElementById("increase-count")
let count = 0
function count_it() {
    count += 1
    increase_count.innerText = count
}


/*
function save() {
    console.log(count)
}
*/

let saveEl = document.getElementById("save-el")
function save() {
    let entries_txt = " " + count + " - "
    saveEl.innerText += entries_txt
}


let zero = document.getElementById("increase-count")
function make_0 () {
zero.innerText = 0
count = 0
}