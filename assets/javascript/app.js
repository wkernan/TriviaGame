var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 30;
var count = 0;
var questions = [
	{
		question1: "How many arms does an octopus have?",
		answer1_1: "2",
		answer1_2: "4",
		answer1_3: "6",
		answer1_4: "8",
		pic: '',
		answer1_ans: 4
	},
	{
		question2: "When was the war of 1812?",
		answer2_1: "1812",
		answer2_2: "1912",
		answer2_3: "1712",
		answer2_4: "Never happened",
		pic: '',
		answer2_ans: 1
	}
];


$('#start-game').on('click', startGame);

function nextQuestion() {

}

function displayQuestion() {

}

function startGame() {
	$('#start-game').addClass('hide');
	//$('')
}

function answer(num) {

}

$('#answer_1').on('click', answer(1))