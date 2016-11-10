//set initial variables
//correct, incorrect, unanswered
var correct = 0
var incorrect = 0
var blank = 10 - (correct + incorrect)

//question and answer object
//var answers = 
//question array of choices
//var 
//etc.

$(document).ready(function() {

//function to show results at end of quiz
function results() {
	//clears questions and shows results
	$(".screen3").show();
	$(".screen2").hide();
	//writes results to html
	$("#correct").html("Number of correct answers: " + correct);
	$("#incorrect").html("Number of incorrect answers: " + incorrect);
	$("#blank").html("Number of unanswered questions: " + blank);
}


//hides questions screen and results screen
//at game start
$(".screen2, .screen3").hide();

//when start button is clicked
$("#start").click(function(){
	//displays questions screen and 
	//hides start screen    
	$(".screen2").show();
	$(".screen1").hide();
	//set timer and display

	//onclick answer button
	//return answer, compare to answer in object
	//if match ++ correct
	//else ++ incorrect
});

//when done button is clicked
$("#done").click(function(){
	// display completed message
	$("#end").html("Quiz Completed!!");
	//stop timer

	//run function to display results
	results()
});

//when timer is up
//time's up message
//call function
//results()
//add restart button?

//when restart button is clicked
$("#restart").click(function(){
	//hide 2 and 3 show 1
	$(".screen1").show();
	$(".screen2, .screen3").hide();
	//reset variables
	var correct = 0
	var incorrect = 0
});


});


