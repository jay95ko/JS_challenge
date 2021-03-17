// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let numberRange = document.querySelector(".numberrange")
const realtimeNumber = document.querySelector(".realtimeNumber")
const playBtn = document.querySelector(".playBtn")
const userInput = document.querySelector(".userInput")
const choseAnswer = document.querySelector(".choseAnswer")
const answer = document.querySelector(".answer")
let userNumber = 0;

function getRandonNum(max){
  console.log(`max is${max}`);
  return Math.floor(Math.random() * max+1);
}

function printNumber(){
  realtimeNumber.innerText=`Generate a number between 0 and ${numberRange.value}`
  userNumber = numberRange.value;
}

function game(){
  const randomNumber = getRandonNum(userNumber);
  const userAnswerNumber = parseInt(userInput.value);
  choseAnswer.innerText=`You chose: ${userAnswerNumber}, the machine chose: ${randomNumber}.`
  console.log(randomNumber)
  if (userAnswerNumber === randomNumber){
    answer.innerText = "You Win!😀"
  }
  else {
    answer.innerText = "You Lost!😂"
  }
}

function init(){
  numberRange.addEventListener("input", printNumber);
  playBtn.addEventListener("click", game);
}

init();