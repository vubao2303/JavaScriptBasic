// var currentCount = 
// <button onclick="decrement()">Decrement</button>


// document.getElementById("decrement").addEventListener("click", currenrCount);
// document.getElementById("increment").addEventListener("click", currentCount);

let count = 0;
let countEl = $("#count");

function setCount() {
    console.log(countEl)
    countEl.text(count)
};

// click A
$("#increment").on("click", function () {
    count++;
    setCount();
})

// // click B
// $("#increment").on("click", function () {
//     count++;
//     countEl.text(count)
// })



// const inc = document.querySelector("#increment");

// inc.addEventListener("click", function () {
//     alert: "hello"
// });