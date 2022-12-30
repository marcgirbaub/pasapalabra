"use strict";

import { questions1, questions2, questions3 } from "./questions.js";

const timerElement = document.getElementById("js-timer");
const scoreElement = document.getElementById("js-score");
const chooseColorElement = document.getElementsByClassName("choose-color")[0];
const blueButtonElement = document.getElementsByClassName("blue-button")[0];
const orangeButtonElement = document.getElementsByClassName("orange-button")[0];
const startButtonElement = document.getElementById("js-start-button");
const definitionsContainerEl = document.getElementsByClassName(
  "definitions-container"
)[0];
const definitionsContainerLetterEl = document.getElementsByClassName(
  "definitions-container-letter"
)[0];
const definitionsContainerDefinitionEl = document.getElementsByClassName(
  "definitions-container-definition"
)[0];
const userAnswerElement = document.getElementById("js-user-answer");
const sendButtonElement = document.getElementById("js-send-button");
const pasapalabraButtonElement = document.getElementById(
  "js-pasapalabra-button"
);
const surrenderButtonEl =
  document.getElementsByClassName("surrender-button")[0];
const letterElement = document.getElementsByClassName("letter");
const endGameContainerEl = document.getElementsByClassName("end-game")[0];
const playAgainBtnEl = document.getElementsByClassName("play-again-btn")[0];
const resultsElement = document.getElementById("js-results");
const readyElement = document.getElementsByClassName("ready")[0];
const questionsSetEl = document.getElementsByClassName("question-type")[0];
const forwardArrowElement =
  document.getElementsByClassName("forward-button")[0];
const backArrowElement = document.getElementsByClassName("back-button")[0];

let indexOfLetter = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let gameStarted = false;
let seconds = 150;
let updateTimer;
let isColorChosen = false;
let setOfQuestions = ["set 1", "set 2", "set 3"];
let questions;

const chooseQuestions = () => {
  if (questionsSetEl.innerText === "set 1") {
    questions = questions1;
  } else if (questionsSetEl.innerText === "set 2") {
    questions = questions2;
  } else if (questionsSetEl.innerText === "set 3") {
    questions = questions3;
  }
};

const decrementSecondAndCheckTimeOver = () => {
  seconds = seconds - 1;
  timerElement.innerText = seconds;
  if (seconds === 0) {
    chooseColorElement.classList.add("hidden");
    definitionsContainerEl.classList.add("hidden");
    surrenderButtonEl.classList.add("hidden");
    endGameContainerEl.classList.remove("hidden");
    showResults(correctAnswers, incorrectAnswers);
    clearInterval(updateTimer);
  }
};

const isLetterAnswered = (status) => {
  if (status === 1 || status === 2) {
    return true;
  } else {
    return false;
  }
};

const areQuestionsRemaining = (questionsArray) => {
  let remainingQuestions = 25;
  questionsArray.forEach((question) => {
    if (question.status !== 0) {
      remainingQuestions = remainingQuestions - 1;
    }
  });

  if (remainingQuestions !== 0) {
    return true;
  } else {
    return false;
  }
};

const showLetterAndDefinition = (index, questionsArray) => {
  let currentStatus;

  if (areQuestionsRemaining(questions)) {
    do {
      currentStatus = questionsArray[index]["status"];

      if (isLetterAnswered(currentStatus)) {
        index++;
      }
    } while (currentStatus !== 0);

    const letterToDisplay = questionsArray[index]["letter"];
    definitionsContainerLetterEl.innerHTML = letterToDisplay.toUpperCase();

    const definitionToDisplay = questionsArray[index]["question"];
    definitionsContainerDefinitionEl.innerHTML = definitionToDisplay;
    userAnswerElement.value = "";
    indexOfLetter = index;
  }
};

const isAnswerCorrect = (userAnswer, questionsArray, index) => {
  const correctAnswer = questionsArray[index]["answer"];

  if (userAnswer.toLowerCase() === correctAnswer) {
    return true;
  } else {
    return false;
  }
};

const checkIfStartRoscoOverAgain = (index) => {
  if (index > 24) {
    indexOfLetter = 0;
  }
};

const isPasapalabraFinished = (questionsArray) => {
  if (areQuestionsRemaining(questionsArray)) {
    return false;
  } else {
    return true;
  }
};

const showResults = (correct, incorrect) => {
  resultsElement.innerText = `RESULTADOS\nRespuestas correctas: ${correct}\nRespuestas incorrectas: ${incorrect}`;
};

const resetGame = () => {
  indexOfLetter = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  userAnswerElement.value = "";
  scoreElement.innerHTML = correctAnswers;
  gameStarted = false;
  seconds = 150;
  timerElement.innerText = seconds;
  timerElement.classList.remove("blue-team");
  timerElement.classList.remove("orange-team");
  isColorChosen = false;

  for (let i = 0; i < 25; i++) {
    letterElement[i].classList.remove("correct");
    letterElement[i].classList.remove("incorrect");
  }

  questions.forEach((question) => {
    question.status = 0;
  });
  readyElement.classList.add("ready-white");
};

startButtonElement.addEventListener("click", () => {
  chooseQuestions();
  if (isColorChosen) {
    updateTimer = setInterval(decrementSecondAndCheckTimeOver, 1000);
    decrementSecondAndCheckTimeOver();
    chooseColorElement.classList.add("hidden");
    definitionsContainerEl.classList.remove("hidden");
    surrenderButtonEl.classList.remove("hidden");
    gameStarted = true;
    showLetterAndDefinition(indexOfLetter, questions);
  } else {
    readyElement.innerText = "debes elegir un color para jugar";
    readyElement.classList.remove("ready-white");
  }
});

blueButtonElement.addEventListener("click", () => {
  isColorChosen = true;
  readyElement.innerText = "¿PREPARADO?";
  readyElement.classList.remove("ready-white");
  timerElement.classList.remove("orange-team");
  definitionsContainerLetterEl.classList.remove("orange-team");
  timerElement.classList.add("blue-team");
  definitionsContainerLetterEl.classList.add("blue-team");
});

orangeButtonElement.addEventListener("click", () => {
  isColorChosen = true;
  readyElement.innerText = "¿PREPARADO?";
  readyElement.classList.remove("ready-white");
  timerElement.classList.remove("blue-team");
  definitionsContainerLetterEl.classList.remove("blue-team");
  timerElement.classList.add("orange-team");
  definitionsContainerLetterEl.classList.add("orange-team");
});

sendButtonElement.addEventListener("click", () => {
  const userAnswer = userAnswerElement.value;

  if (isAnswerCorrect(userAnswer, questions, indexOfLetter)) {
    letterElement[indexOfLetter].classList.add("correct");
    correctAnswers++;
    scoreElement.innerHTML = correctAnswers;
    questions[indexOfLetter]["status"] = 1;
  } else {
    letterElement[indexOfLetter].classList.add("incorrect");
    questions[indexOfLetter]["status"] = 2;
    incorrectAnswers++;
  }
  indexOfLetter++;

  checkIfStartRoscoOverAgain(indexOfLetter);
  showLetterAndDefinition(indexOfLetter, questions);

  if (isPasapalabraFinished(questions)) {
    definitionsContainerEl.classList.add("hidden");
    endGameContainerEl.classList.remove("hidden");
    surrenderButtonEl.classList.add("hidden");
    showResults(correctAnswers, incorrectAnswers);
    clearInterval(updateTimer);
  }
});

pasapalabraButtonElement.addEventListener("click", () => {
  indexOfLetter++;
  checkIfStartRoscoOverAgain(indexOfLetter);
  showLetterAndDefinition(indexOfLetter, questions);
});

surrenderButtonEl.addEventListener("click", () => {
  definitionsContainerEl.classList.add("hidden");
  surrenderButtonEl.classList.add("hidden");
  endGameContainerEl.classList.remove("hidden");
  clearInterval(updateTimer);
  showResults(correctAnswers, incorrectAnswers);
  gameStarted = false;
});

playAgainBtnEl.addEventListener("click", () => {
  resetGame();
  endGameContainerEl.classList.add("hidden");
  chooseColorElement.classList.remove("hidden");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && gameStarted === true) {
    const userAnswer = userAnswerElement.value;

    if (isAnswerCorrect(userAnswer, questions, indexOfLetter)) {
      letterElement[indexOfLetter].classList.add("correct");
      correctAnswers++;
      scoreElement.innerHTML = correctAnswers;
      questions[indexOfLetter]["status"] = 1;
    } else {
      letterElement[indexOfLetter].classList.add("incorrect");
      questions[indexOfLetter]["status"] = 2;
      incorrectAnswers++;
    }
    indexOfLetter++;

    checkIfStartRoscoOverAgain(indexOfLetter);
    showLetterAndDefinition(indexOfLetter, questions);

    if (isPasapalabraFinished(questions)) {
      definitionsContainerEl.classList.add("hidden");
      endGameContainerEl.classList.remove("hidden");
      surrenderButtonEl.classList.add("hidden");
      clearInterval(updateTimer);
      showResults(correctAnswers, incorrectAnswers);
      gameStarted = false;
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && gameStarted === true) {
    event.preventDefault();
    indexOfLetter++;
    checkIfStartRoscoOverAgain(indexOfLetter);
    showLetterAndDefinition(indexOfLetter, questions);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && gameStarted === true) {
    definitionsContainerEl.classList.add("hidden");
    surrenderButtonEl.classList.add("hidden");
    endGameContainerEl.classList.remove("hidden");
    clearInterval(updateTimer);
    showResults(correctAnswers, incorrectAnswers);
    gameStarted = false;
  }
});

backArrowElement.addEventListener("click", () => {
  const currentSet = questionsSetEl.innerText;

  if (currentSet === setOfQuestions[0]) {
    return;
  } else {
    questionsSetEl.innerText =
      setOfQuestions[setOfQuestions.indexOf(currentSet) - 1];
  }
});

forwardArrowElement.addEventListener("click", () => {
  const currentSet = questionsSetEl.innerText;

  if (currentSet === setOfQuestions[setOfQuestions.length - 1]) {
    return;
  } else {
    questionsSetEl.innerText =
      setOfQuestions[setOfQuestions.indexOf(currentSet) + 1];
  }
});
