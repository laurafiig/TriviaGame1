$(document).ready(function() {

    //variables used
    var time = 120;
    var correct = 0;
    var incorrect = 0;

    //hides div two and three
    $(".pageTwo").hide();
    $(".pageThree").hide();




    // ==============================================================================
    //to find correct answers

    $(":input").on("click", function() {
        if ($(this).attr("id") === "true") {
            if ($(this).attr("value") === "1") {
                correct++;
            } else if ($(this).attr("value") === "0") {
                incorrect++;
            }
        }
        // console.log("correct " + correct);
        // console.log("incorrect: " + (10 - correct));
    });
    // =================================================================================
    //on click start, will display the questions i.e class pagetwo
    $("#start").click(function() {

        $(".pageTwo").show();
        $(".pageOne").hide();

        //starts the timer
        $('#start').on('click', run);

        //sets the timer
        function run() {
            counter = setInterval(decrement, 1000);
        }


        function decrement() {

            time--;
            // Show the time in the #show-time tag.
            $('#display').html('<h2>' + time + '</h2>');

            // Once time hits zero...
            if (time === 0) {
                // ...run the stop function.
                clearInterval(counter);
                $(".pageTwo").hide();
                $(".pageThree").show();
                $(".stats").html("Game Score");
                $(".correct").html("Correct Answers :" + correct);
                $(".incorrect").html("Incorrect Answers :" + (10 - correct));
                // time = 10;
                // Alert the user that time is up.
                // alert('Time Up!')
            }
        }


        run();




    });




    // ===================================================================================
    $("#submit").click(function() {

        $(".pageTwo").hide();
        $(".pageThree").show();

        $(".stats").html("Game Score");
        $(".correct").html("Correct Answers :" + correct);
        $(".incorrect").html("Incorrect Answers :" + (10 - correct));


    });

});