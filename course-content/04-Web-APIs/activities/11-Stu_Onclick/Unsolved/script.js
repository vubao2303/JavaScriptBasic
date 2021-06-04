
let count = 0;
// on click function. querySelector = $("") and addEventListener = on(click, function)
$("#increment").on("click", function () {
    count++;
    $("#count").text(count)
})

$("#decrement").on("click", function () {
    count--;
    $("#count").text(count)
    if (count < 0) {
        $("#count").text(0)
    }
})

