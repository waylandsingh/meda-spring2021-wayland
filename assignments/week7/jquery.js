// jQuery(); //jquery creates a special way of writing javascript
// goal: run functions after the page has loaded
$(document).ready(); //deprecated syntax

//going to be doing async (asynchronous) js
//pass the ready() a function def
$(function () {
    console.log('page loaded up - jquery is goot')

    let myOnlyButton = $("#my-button");
    
    // myOnlyButton.remove(); //this is a DOM object selected by ID (above)

    // $("head").remove() //one-liner to remove the head element
    // $("body").remove() //one-liner to remove the body element

    myOnlyButton.css("background-color", "lightblue");

    setTimeout(function() {
        //run when timout is finished
        myOnlyButton.css("background-color", "red")
    }, 5000);

    myOnlyButton.click(function() {
        // let bodyColor = //get the bg color and use for if statement to toggle yellow/white bg
        $("body").css("background-color", "yellow");
    });

    // .click runs a function when the element is clicked on
    // example: create a box with a button
    let formSubmit = $("#submit");



    // d. val sets or gets the value of an input
    formSubmit.click(function () {
        // on formsubmit click, run the function, which reads the user-info value and writes it to console
        // NOTE: ALL values from outside of JS calls is read as a STRING!!!!
        let submittedData = $("#user-info").val();
        if (parseFloat(submittedData)) {
            submittedData = parseFloat(submittedData)
        }
        console.log(typeof submittedData);

        $("#resultsParagraph").text("we got this number from you: " + submittedData);
    });
}); //new syntax to run something once fully loaded. Want to load things up
