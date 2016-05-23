$(document).ready(function() {

	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var time = 30;
	var count = 0;
	var questions = [
		{
			question: "How many arms does an octopus have?",
			answer1: "2",
			answer2: "4",
			answer3: "6",
			answer4: "8",
			quest_pic: 'http://lorempixel.com/400/200',
			answer_pic: '',
			answer: "An octopus has 8 arms",
			answer_num: 4
		},
		{
			question: "When was the war of 1812?",
			answer1: "1812",
			answer2: "1912",
			answer3: "1712",
			answer4: "Never happened",
			quest_pic: 'http://lorempixel.com/400/200',
			answer_pic: '',
			answer: "1812",
			answer_num: 1
		}
	];


	$('#start-game').on('click', startGame);

	function timer() {
		time--;
		$('#timer').html('<h3>Timer: ' + time + 's</h3>');
	};

	function nextQuestion() {
		clearInterval(counter);
		time = 30;
		count++;
		displayQuestion();
	};

	function timesUp() {
		clearInterval(counter);
		unanswered++;
		$('#timer').html("<h3>Time's Up!</h3>");
		$('#quest-image').html('<img src="' + questions[count].answer_pic + '">')
		$('#question').html('<h3>' + questions[count].answer + '</h3>')
		setTimeout(nextQuestion, 1000 * 7);
		console.log(unanswered);
	};

	function displayQuestion() {
		$('#quest-image').html('<img src="' + questions[count].quest_pic + '">');
		$('#question').html('<h3>' + questions[count].question + '</h3>');
		displayAnswers();
		counter = setInterval(timer, 1000);
		setTimeout(timesUp, 1000 * 30);
	};

	function displayAnswers() {
		$('#answer1').html(questions[count].answer1);
		$('#answer2').html(questions[count].answer2);
		$('#answer3').html(questions[count].answer3);
		$('#answer4').html(questions[count].answer4);
	};

	function startGame() {
		$('#start-game').addClass('hide');
		$('.list-group').removeClass('hide');
		$('#timer').removeClass('hide');
		displayQuestion();
		//$('')
	};

	function answer(num) {

	};

	$('#answer_1').on('click', answer(1));

});