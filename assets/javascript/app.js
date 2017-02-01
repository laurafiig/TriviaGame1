
$(document).ready(function() {

	//set initial variables
	var correct = 0;
	var incorrect = 0;
	var blank = 10 - (correct + incorrect);
	var answers = []
	//length of timer in seconds
	var length = 90;

	//hides questions screen and results screen at game start
	$(".screen2, .screen3").hide();

//////////////////////////////////////////////////////////

	// set timer
	function startCount() {
		timer = setInterval(countdown, 1000);
	}

	// countdown
	function countdown(){
		length--
		//show time remaining
		$("#time").html(length);
		//stop timer
		if (length === 0){
			clearInterval(timer);
			//record inputs and check
			checkAnswer()
			//run function to display results
			results();
			//display times up message
			$("#end").html("Times Up!!");
		};
	}		


	//records radio button clicks and checks answers
	function checkAnswer(){
		//records radio button clicks
		$("input").each(function(){
			var checked=$(this).filter(":checked").val()
			answers.push(checked);
		});
		//checks answers
		for (i=0; i<answers.length; i++) {
			if (answers[i]==="true"){
				correct++
			} else if (answers[i]==="false"){
				incorrect++
			}
			blank = 10 - (correct + incorrect);
		};
	}


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


	//resets gameboard, timer and answers
	function reset(){
		//reset question count
		correct = 0
		incorrect = 0
		blank = 10 - (correct + incorrect)	
		answers = []
		//reset timer
		length = 90
		$("#time").html("");
		//resets questions
		$("input").attr("checked", false);
	}

///////////////////////////////////////////////////////////

	//when start button is clicked
	$(document).on("click","#start",function(){
		//displays questions screen and hides start screen    
		$(".screen2").show();
		$(".screen1").hide();
		//activate timer on click
		startCount();
	});

	//when done button is clicked
	$(document).on("click","#done",function(){
		//record inputs and check
		checkAnswer()
		// display completed message
		$("#end").html("Quiz Completed!!");
		//stop timer
		clearInterval(timer);
		//run function to display results
		results();
	});

	//when restart button is clicked
	$(document).on("click","#tryAgain",function(){
		//displays questions screen and hides start screen    
		$(".screen1").show();
		$(".screen3").hide();
		reset()
	});

});  