// total price
// tip percentage

var submitEl = document.querySelector("#submit");
var priceInput = document.querySelector("#toal-price")
var tipInput = document.querySelector("#tip-percentage")
var tipAmount = document.querySelector("#tip-amount")
var newTotal = document.querySelector("new-total")

const caculateBtn = $("#submit");

caculateBtn.on("click", function (event) {
    event.preventDefaul;
    console.log("clicked")
    // newTotal();
})

// let newTotal = function () {
//     submissionResponse = priceInput + tipInput;
//     return submissionResponse;
// }