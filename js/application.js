$(document).ready( function () {
/*Global Variable:*/ 
var currentMathCal;
var timer = 9;
var countDown;
var currentScore = 0;
var highScore = 0;
var numberRange = 10;

/*Random number generator:*/ 
var randomNumber = function (Num) {
  return Math.floor(Math.random() * Num);
}
/*Number Range Changer*/ 
$('#number-limit').on('click input change', function () {
  numberRange = $('#number-limit').val();
  $('#numberRange').text(numberRange);
});

/*Math Calculation:*/
var mathCal = function () {
  var question = {};
  var firstNum = randomNumber(numberRange);
  var secondNum = randomNumber(numberRange);

 question.answer = firstNum + secondNum;
  question.equation = String(firstNum) + " + " + String(secondNum);

  return question;
}

/*Start Game and Timer Function's:*/
var startGame = function () {
  if (!countDown) {
    if (timer === 0) {
      updateTime(9);
      updateScore(-currentScore);
    }
 countDown = setInterval(function () {
  updateTime(-1);
  if (timer === 0) {
    clearInterval(countDown);
    countDown = undefined;
  }
}, 1000);
  }
}

var updateTime = function (second) {
  timer += second;
  $('#Timer').text(timer);
}

/*Score Function's:*/
var updateScore = function (point) {
  currentScore += point;
  $('#Score').text("Current Score: " + currentScore);
}

var TotalScore = function (point) {
  highScore += point;
  $('#HighScore').text("High Score: " + highScore);
}

/*Generate New equation and insert in html:*/
var generateEquation = function () { 
currentMathCal = mathCal();
$('#Question').text(currentMathCal.equation);
}

/*Validate the user Input:*/ 
$('#userInput').on('keyup', function () {
  startGame();
 var input = Number($(this).val());
 var result = currentMathCal.answer;
  if (input === result) {
    generateEquation();
    $('#userInput').val('');
    updateTime(+1);
    updateScore(+1);
    TotalScore(+1);
  }
  });

  /*Generate the Equation on ready function:*/ 
generateEquation();
});