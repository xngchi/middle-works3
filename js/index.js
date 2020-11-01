$(document).ready(function () {


    var colorArray = ["red", "blue", "green", "purple"]

    var a = $(".box")
    $.each(a, function (i, d) {
        console.log(i, d)
        $(d).css("width", 100 + 100 * i + "px")
        $(d).css("height", "100px")
        $(d).css("background-color", colorArray[i])
    })

    $(a[1]).css("height", "200px")
    console.log(a);
})