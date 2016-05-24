var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 30;
var count = 0;
var timeCounter;
var timesUpCounter;
var backgroundMusic = new Audio('assets/audio/Seinfeld.mp3');
var questions = [
	{
		question: "What does Kervorka mean?",
		answer1: "The smell of the beach.",
		answer2: "Shrinkage.",
		answer3: "The scent of a woman.",
		answer4: "The lure of the animal.",
		answer_pic: 'assets/images/kramer_thats_true.gif',
		answer: "The lure of the animal.",
		answer_num: 4,
		answerAudio: function() {
			var audio = new Audio('http://www.wavsource.com/snds_2016-05-22_6159520873604738/tv/seinfeld/kervorka3.wav');
			audio.play();
		}
	},
	{
		question: "What was George's desription of Elaine's dancing?",
		answer1: "It's more like a full body, dry heave, set to music.",
		answer2: "It's a combination of monkey meets Frankenstein.",
		answer3: "I don't even know how to describe it.",
		answer4: "Jerry... it was awful.",
		answer_pic: 'assets/images/elaine_dance.gif',
		answer: "It's more like a full body, dry heave, set to music.",
		answer_num: 1
	}
];

function gameEnd() {
	clearInterval(timesUpCounter);
	clearInterval(timeCounter);
	$('.list-group').addClass('hide');
	$('#question').addClass('hide');
	$('#quest-image').addClass('hide');
	$('#timer').addClass('hide');
	$('#correct').html("<h1>You got " + correct + " questions correct.</h1>");
	$('#incorrect').html("<h3>You got " + incorrect + " questions incorrect.</h3>");
	$('#unanswered').html("<h3>You didn't answer " + unanswered + " questions.</h3>");
	$('#restart-game').removeClass('hide');
}

function timer() {
	time--;
	$('#timer').html('<h3>Timer: ' + time + 's</h3>');
};

function nextQuestion() {
	$('#result').html("");
	$('.list-group').removeClass('hide');
	clearInterval(timesUpCounter);
	clearInterval(timeCounter);
	time = 30;
	count++;
	if(questions.length === count) {
		console.log('working');
		gameEnd();
	} else {
		displayQuestion();
	}
};

function timesUp() {
	$('.list-group').addClass('hide');
	clearInterval(timesUpCounter);
	clearInterval(timeCounter);
	unanswered++;
	$('#result').html("<h3>Time's Up!</h3>");
	$('#image').html('<img src="' + questions[count].answer_pic + '">')
	$('#question').html('<h3>' + questions[count].answer + '</h3>')
	setTimeout(nextQuestion, 1000 * 6);
	console.log(unanswered);
};

function displayQuestion() {
	$('#timer').removeClass('hide');
	timeCounter = setInterval(timer, 1000);
	$('#quest-image').html('<img src="' + questions[count].quest_pic + '">');
	$('#question').html('<h3>' + questions[count].question + '</h3>');
	displayAnswers();
	timesUpCounter = setTimeout(timesUp, 1000 * 30);
};

function displayAnswers() {
	$('#answer1').html(questions[count].answer1);
	$('#answer2').html(questions[count].answer2);
	$('#answer3').html(questions[count].answer3);
	$('#answer4').html(questions[count].answer4);
};

function startGame() {
	backgroundMusic.pause();
	backgroundMusic.currentTime = 0;
	$('#start-game').addClass('hide');
	$('.list-group').removeClass('hide');
	$('#timer').removeClass('hide');
	displayQuestion();
	//$('')
};

function restart() {
correct = 0;
incorrect = 0;
unanswered = 0;
time = 30;
count = 0;
$('#result').html("");
$('#correct').html("");
$('#incorrect').html("");
$('#unanswered').html("");
$('#restart-game').addClass('hide');
$('.list-group').removeClass('hide');
$('#question').removeClass('hide');
$('#quest-image').removeClass('hide');
displayQuestion();
};

function guessAnswer(num) {
	console.log('works');
	console.log(questions[count]);
	questions[count].answerAudio();
	if(num === questions[count].answer_num) {
		clearInterval(timesUpCounter);
		clearInterval(timeCounter);
		correct++;
		$('#result').html("<h1>That's Correct!</h1>");
		$('#image').html("<img src='" + questions[count].answer_pic + "'>");
		setTimeout(nextQuestion, 1000 * 7);
	} else {
		clearInterval(timesUpCounter);
		clearInterval(timeCounter);
		incorrect++;
		$('#result').html("<h1>That's Incorrect!</h1>");
		setTimeout(nextQuestion, 1000 * 7);
	}
};

$(document).ready(function() {
	backgroundMusic.play();
});

