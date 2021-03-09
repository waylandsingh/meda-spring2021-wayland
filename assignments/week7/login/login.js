$(document).ready(function() {

    $("#login").click(function(event) {
        event.preventDefault();

        // console.log("Button clicked");

        //get the values from those fields
        let username = $("#username").val()

        let password = $("#password").val()

        if (username === "user") {
            
            if (password === "123456") {
                console.log("Oh no! I've been hacked")
                $("body").text("HACKED, you have been HACKED. Time for better security T.T")
            } else {
                console.log("incorrect password or username")
            }
        } else {
            console.log("incorrect password or username")
        }

    });
});