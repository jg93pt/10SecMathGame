$(document).ready( function () {
/*Global Variable:*/ 
var currentMathCal;

/*Random number generator:*/ 
var randomNumber = function (Num) {
  return Math.floor(Math.random() * Num);
}

/*Math Calculation:*/
var mathCal = function () {
  var question = {};
  var firstNum = randomNumber(10);
  var secondNum = randomNumber(10);
  /*var operator = ["+", "-"];
  var randomOp =  Math.floor(Math.random() * operator.length);
    var opervalue = operator[randomOp];*/

 question.answer = firstNum + secondNum;
  question.equation = String(firstNum) + " + " + String(secondNum);

  return question;
}

/*Generate New equation and insert in html:*/
var generateEquation = function () { 
currentMathCal = mathCal();
$('#Question').text(currentMathCal.equation);
}

/*Validate the user Input:*/ 
$('#userInput').on('keyup', function () {
 var input = Number($(this).val());
 var result = currentMathCal.answer;

  if (input === result) {
    generateEquation();
    $('#userInput').val('');
  }
  });

  /*Generate the Equation on ready function:*/ 
generateEquation();
});