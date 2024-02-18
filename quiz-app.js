const questions = [
{
	question: "which is largest animal in the world?",
	answers: [
	{ text: "shark", correct: false},
	{ text: "blue whale", correct: true},
	{ text: "elephant", correct: false},
	{ text: "giraffe", correct: false}
	]
},

{
	question: "which is the smallest country in the world?",
	answers: [
	{ text: "vatican city", correct: true},
	{ text: "bhutan", correct: false},
	{ text: "nepal", correct: false},
	{ text: "shri lanka", correct: false}
	]
},

{
	question: "which is largest desert in the world?",
	answers: [
	{ text: "kalahari", correct: false},
	{ text: "gobi", correct: false},
	{ text: "sahara", correct: false},
	{ text: "antartica", correct: true}
	]
},

{
	question: "which is the smallest continent in the world?",
	answers: [
	{ text: "asia", correct: false},
	{ text: "australia", correct: true},
	{ text: "antartica", correct: false},
	{ text: "africa", correct: false}
	]
}
];

const questionElement = document.getElementById("question");
const answereButton = document.getElementById("answere-btn");
const nextButton = document.getElementById("next-btn");

let correntQuestionIndex = 0;
let score = 0;

function startQuiz(){
	correntQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

 function showQuestion(){
 	resetState();
 	let currentQuestion = questions[correntQuestionIndex];
 	let QuestionNo = correntQuestionIndex + 1;
 	questionElement.innerHTML = QuestionNo + ". " + 
 	currentQuestion.question;

 	 currentQuestion.answers.forEach(answer => {
 	 	const button = document.createElement("button");
 	 	button.innerHTML = answer.text;
 	 	button.classList.add("btn");
 	 	answereButton.appendChild(button);
 	 	if (answer.correct){
 	 		button.dataset.correct = answer.correct;
 	 	}
 	 	button.addEventListener("click" , selectAnswer);
 	 })
 }

 function resetState(){
 	nextButton.style.display = "none";
 	while(answereButton.firstChild){
 		answereButton.removeChild(answereButton.firstChild);
 	}
 }

 function selectAnswer(e){
 	const selectedBtn = e.target;
 	const isCorrect = selectedBtn.dataset.correct === "true";
 	if (isCorrect){
 		selectedBtn.classList.add("correct");
 		score++;
 	}else{
 		selectedBtn.classList.add("incorrect");
 	}

 	Array.from(answereButton.children).forEach(button => {
 		if ( button.dataset.correct === "true") {
 			button.classList.add("correct");
 		}
 		button.disabled = true;
 	});
 	nextButton.style.display = "block";

 }

 function showScore(){
 	resetState();
 	questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
 	nextButton.innerHTML = "Play Again";
 	nextButton.style.display = "block";
 }

 function handleNextbutton(){
 	correntQuestionIndex++;
 	if(correntQuestionIndex < questions.length){
 		showQuestion();
 	}else{
 		showScore();
 	}
 }

 nextButton.addEventListener("click" , () =>{
 	if(correntQuestionIndex < questions.length){
 		handleNextbutton();
 	}
 	else{
 		startQuiz();
 	}
 })

 startQuiz();