var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 30;
var sound = true;
var count = 0;
var timeCounter;
var timesUpCounter;
var backgroundMusic = new Audio('assets/audio/Seinfeld.mp3');
backgroundMusic.volume = .3;
var timesUpGif = 'assets/images/fire.gif';
function wrongAudio() {
	var audio = new Audio('assets/audio/no_soup.wav');
	audio.play();
};
function timesUpAudio() {
	var audio = new Audio('assets/audio/cigar.mp3');
	var otherAudio = new Audio('assets/audio/yell.mp3');
	setTimeout(function(){audio.play()},1000);
	setTimeout(function(){otherAudio.play()}, 4500);
};
function startAudio() {
	/*ar audio = new Audio('http://www.wavsource.com/snds_2016-05-22_6159520873604738/tv/seinfeld/crazy.wav');*/
	var audio = new Audio('assets/audio/giddy-up.wav');
	audio.play();
};
var questions = [
	{
		question: "What does Kervorka mean?",
		answer1: "The smell of the beach",
		answer2: "Shrinkage",
		answer3: "The scent of a woman",
		answer4: "The lure of the animal",
		answer_pic: 'assets/images/kramer_thats_true.gif',
		wrong_pic: 'assets/images/kramer_wrong.gif',
		answer: "The lure of the animal",
		answer_num: 4,
		answerAudio: function() {
			var audio = new Audio('assets/audio/kervorka3.wav');
			audio.play();
		}
	},
	{
		question: "What was George's description of Elaine's dancing?",
		answer1: "It's more like a full body, dry heave, set to music",
		answer2: "It's a combination of monkey meets Frankenstein",
		answer3: "I don't even know how to describe it",
		answer4: "Jerry... it was awful",
		answer_pic: 'assets/images/elaine_dance.gif',
		wrong_pic: 'assets/images/elaine_wrong.gif',
		answer: "It's more like a full body, dry heave, set to music",
		answer_num: 1,
		answerAudio: function() {
			var audio = new Audio('assets/audio/ah_hah.wav');
			audio.play();
		}
	},
	{
		question: "What is Elaine's catch phrase throughout the show?",
		answer1: "Bologne!",
		answer2: "Get Out!",
		answer3: "Unbelievable!",
		answer4: "You're Insane!",
		answer_pic: 'http://media.giphy.com/media/70zEAfPVzKG1W/giphy.gif',
		wrong_pic: 'http://media.giphy.com/media/70zEAfPVzKG1W/giphy.gif',
		answer: "Get Out!",
		answer_num: 2,
		answerAudio: function() {
			var audio = new Audio('assets/audio/get_out.wav');
			audio.play();
		}
	},
	{
		question: "What do Jerry and Elaine have to do, to save their friendship?",
		answer1: "Go to a movie",
		answer2: "Have an adventure",
		answer3: "Have sex",
		answer4: "Stop hanging out with George",
		answer_pic: 'assets/images/laughing.gif',
		wrong_pic: 'assets/images/shrug.gif',
		answer: "Have sex",
		answer_num: 3,
		answerAudio: function() {
			var audio = new Audio('assets/audio/save_friendship.wav');
			audio.play();
		}
	},
	{
		question: "What is Teri Hatcher's famous line she says at the end of the espisode, 'The Implant'?",
		answer1: "Delores!",
		answer2: "They're real and they're spectacular!",
		answer3: "Stella!",
		answer4: "I'm getting out of here. Don't call me",
		answer_pic: 'assets/images/real.gif',
		wrong_pic: 'assets/images/trip.gif',
		answer: "They're real and they're spectacular!",
		answer_num: 2,
		answerAudio: function() {
			var audio = new Audio('assets/audio/spectec.mp3');
			audio.play();
		}
	},
	{
		question: "What does Jerry agree to wear on 'The Today Show'?",
		answer1: "Skinny jeans",
		answer2: "Eye patch",
		answer3: "Pirate shirt",
		answer4: "Captains hat",
		answer_pic: 'assets/images/pirate.gif',
		wrong_pic: 'assets/images/smirk.gif',
		answer: 'Pirate shirt',
		answer_num: 3,
		answerAudio: function() {
			var audio = new Audio('assets/audio/pirate.mp3');
			audio.play();
		}
	},
	{
		question: "Who is Jerry's sworn enemy, that lives down the hall?",
		answer1: "Newman",
		answer2: "Jackie Chiles",
		answer3: "George Steinbrenner",
		answer4: "David Puddy",
		answer_pic: 'assets/images/newman.gif',
		wrong_pic: 'assets/images/nope.gif',
		answer: 'Newman',
		answer_num: 1,
		answerAudio: function() {
			var audio = new Audio('assets/audio/hello2.wav');
			audio.play();
		}
	}
];

function volumeToggle() {
	if(sound === true) {
		backgroundMusic.volume = 0;
		sound = false;
		$('#off').addClass('hide');
		$('#up').removeClass('hide');	
	} else {
		backgroundMusic.volume = .3;
		sound = true;
		$('#off').removeClass('hide');
		$('#up').addClass('hide');
	}
}

function gameEnd() {
	clearInterval(timesUpCounter);
	clearInterval(timeCounter);
	$('.list-group').addClass('hide');
	$('#question').addClass('hide');
	$('#quest-image').addClass('hide');
	$('#timer').addClass('hide');
	if(correct === 1) {
		$('#correct').html("<h1>You got " + correct + " question correct!</h1>");
	} else {
		$('#correct').html("<h1>You got " + correct + " questions correct!</h1>");
	}
	if(incorrect === 1) {
		$('#incorrect').html("<h2>You got " + incorrect + " question incorrect</h2>");
	} else {
		$('#incorrect').html("<h2>You got " + incorrect + " questions incorrect</h2>");
	};
	if(unanswered === 1) {
		$('#unanswered').html("<h2>" + unanswered + " question unanswered</h2>");
	} else {
		$('#unanswered').html("<h2>" + unanswered + " questions unanswered</h2>");
	}
	$('#restart-game').removeClass('hide');
}

function timer() {
	time--;
	$('#timer').html('<h3>Timer: ' + time + 's</h3>');
};

function nextQuestion() {
	$('#answer').addClass('hide');
	$('#image').addClass('hide');
	$('#result').addClass('hide');
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
	timesUpAudio();
	$('.list-group').addClass('hide');
	$('#image').removeClass('hide');
	$('#result').removeClass('hide');
	$('#timer').addClass('hide');
	$('#question').addClass('hide');
	$('#answer').removeClass('hide');
	clearInterval(timesUpCounter);
	clearInterval(timeCounter);
	unanswered++;
	$('#result').html("<h2>Time's Up!</h2>");
	$('#image').html('<img src="' + timesUpGif + '">');
	$('#answer').html('<h2>Answer: ' + questions[count].answer + '</h2>');
	setTimeout(nextQuestion, 1000 * 6);
	console.log(unanswered);
};

function displayQuestion() {
	$('#question_count').html('<h4>Question ' + parseInt(count + 1) + '/' + parseInt(questions.length) + '</h4>');
	$('#timer').html('<h3>Timer: ' + time + 's</h3>');
	timeCounter = setInterval(timer, 1000);
	$('#quest-image').html('<img src="' + questions[count].quest_pic + '">');
	$('#question').html('<h2>' + questions[count].question + '</h2>');
	$('#question').removeClass('hide');
	displayAnswers();
	timesUpCounter = setTimeout(timesUp, 1000 * 30);
	$('#timer').removeClass('hide');
};

function displayAnswers() {
	$('#answer1').html(questions[count].answer1);
	$('#answer2').html(questions[count].answer2);
	$('#answer3').html(questions[count].answer3);
	$('#answer4').html(questions[count].answer4);
};

function startGame() {
	startAudio();
	$('#title-img').addClass('hide');
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
	$('#question').addClass('hide');
	$('.list-group').addClass('hide');
	$('#answer').removeClass('hide');
	$('#image').removeClass('hide');
	$('#timer').addClass('hide');
	$('#result').removeClass('hide');
	if(num === questions[count].answer_num) {
		questions[count].answerAudio();
		clearInterval(timesUpCounter);
		clearInterval(timeCounter);
		correct++;
		$('#result').html("<h1>Correct!</h1>");
		$('#image').html("<img src='" + questions[count].answer_pic + "'>");
		$('#answer').html('<h2>Answer: ' + questions[count].answer + '</h2>');
		setTimeout(nextQuestion, 1000 * 6);
	} else {
		wrongAudio();
		clearInterval(timesUpCounter);
		clearInterval(timeCounter);
		incorrect++;
		$('#result').html("<h1>No Soup For You!</h1>");
		$('#image').html("<img src='" + questions[count].wrong_pic + "'>");
		$('#answer').html('<h2>Answer: ' + questions[count].answer + '</h2>');
		setTimeout(nextQuestion, 1000 * 6);
	}
};

backgroundMusic.loop = true;
backgroundMusic.play();



/*$(document).ready(function() {
	backgroundMusic.play();
});*/

