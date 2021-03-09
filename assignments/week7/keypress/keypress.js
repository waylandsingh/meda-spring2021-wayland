$(document).ready(function() {

    console.log('something')
    $("#target").keypress(function(event) {

        // parse the input from ASCII
        let keyPressed = String.fromCharCode(event.which);

        // careful about comparison: which is a NUMBER ? probablyASCII for the letter
        if (keyPressed == "+") {
            let currentMarginTop = parseInt($("#target").css("margin-top"));

            console.log(currentMarginTop);

            let newMargin = (currentMarginTop + 10) + "px"; //autoconcatenate as string

            $("#target").css("margin-top", newMargin);
        }
        console.log("keyboard in use")
    });

});