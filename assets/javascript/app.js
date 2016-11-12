$(document).ready(function() {

	//set initial variables
	//correct, incorrect, unanswered
	var correct = 0
	var incorrect = 0
	var blank = 10 - (correct + incorrect)
	//length of timer in seconds
	var length = 120

	//hides questions screen and results screen at game start
	$(".screen2, .screen3").hide();

	//function to show results at end of quiz
	//called on either timeout or done button click
	function results() {
		//clears questions and shows results
		$(".screen3").show();
		$(".screen2").hide();
		//writes results to html
		$("#correct").html("Number of correct answers: " + correct);
		$("#incorrect").html("Number of incorrect answers: " + incorrect);
		$("#blank").html("Number of unanswered questions: " + blank);
	}

	//records button clicks
	$(".radio-inline").on("click",function(){
		var ans = this.id
		//count correct guess
		if (ans=="true"){
			correct++
			blank = 10 - (correct + incorrect)
		//count incorrect guess
		} else {incorrect++;
			blank = 10 - (correct + incorrect)
		}
	});	

	//when start button is clicked
	$("#start").click(function() {
		//displays questions screen and hides start screen    
		$(".screen2").show();
		$(".screen1").hide();
		//activate timer on click
		$("#start").on("click", startCount);	
		//set timer
		function startCount() {
			timer = setInterval(countdown, 1000);
		}
		function countdown(){
			length--
			//show time remaining
			$("#time").html("Time remaining: " + length);
			//stop timer
			if (length === 0){
				clearInterval(timer);
				//run function to display results
				results();
				//display times up message
				$("#end").html("Times Up!!");
			}
		}		
		//run function
		startCount();

	});

	//when done button is clicked
	$("#done").click(function(){
		// display completed message
		$("#end").html("Quiz Completed!!");
		//stop timer
		clearInterval(timer);
		//run function to display results
		results();
	});

});