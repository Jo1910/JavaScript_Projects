// This function will add two numbers
function addNumbers() {
  var Addition = 15 + 12; //declaring a variable and assigning it a number value
  document.getElementById("add").innerHTML = "15 + 12 = " + Addition; //putting the value of result into HTML element with 'add' id
}

// This function will subtract a number
function subNumbers() {
  var Subtract = 13 - 7; //declaring a variable and assigning it a number value
  document.getElementById("sbt").innerHTML = "13 - 7 = " + Subtract; //putting the value of result into HTML element with 'sbt' id
}

// This function will multiply 2 numbers
function multiplyNumbers() {
  var Multiply = 11 * 9; //declaring a variable and assigning it a number value
  document.getElementById("mlt").innerHTML = "11 * 9 = " + Multiply; //putting the value of result into HTML element with 'mlt' id
}

// This function will divide a number
function divideNumbers() {
  var Divide = 64 / 8; //declaring a variable and assigning it a number value
  document.getElementById("dvd").innerHTML = "64 / 8 = " + Divide; //putting the value of result into HTML element with 'dvd' id
}

// This function will perform a multiple math operation
function multipleMath() {
  var Mulitple = 8 + (9 / 3) * 4 - 1; //declaring a variable and assigning it a number value
  document.getElementById("mltm").innerHTML =
    "8 plus 9 divided by 3, multiplied by 4 and then substracted by 1 equals " + //putting the value of result into HTML element with 'mltm' id
    Mulitple;
}

// This function will get a remainder of a divided number
function remainderMath() {
  var Remainder = 33 % 14; //declaring a variable and assigning it a number value
  document.getElementById("rmn").innerHTML =
    "When you divide 33 by 14 you have a remainder of: " + Remainder; //putting the value of result into HTML element with 'rmn' id
}

// This function will show a negation of a number
function negMath() {
  var n = 5; //declaring a variable and assigning it a number value
  document.getElementById("neg").innerHTML =
    "Negation of the number 5 is " + -n + "."; //putting the value of result into HTML element with 'neg' id
}

// This function will get a random number
function randomNum() {
  var Random = Math.random() * 60; //declaring a variable and assigning it a number value
  document.getElementById("rnd").innerHTML = //putting the value of result into HTML element with 'rnd' id
    Random + " is a random number between 1 and 60.";
}

// This function will round a decimal number to the next round integer
function ceilNum() {
  var Ceiling = Math.ceil(5.6); //declaring a variable and assigning it a number value
  document.getElementById("cln").innerHTML = //putting the value of result into HTML element with 'cln' id
    "When we round the number 5.6 to the next round integer, we get " +
    Ceiling +
    ".";
}

// This function will increment a number by 1
function incremNum() {
  var a = 7; //declaring a variable and assigning it a number value
  a++;
  document.getElementById("inc").innerHTML = "7 increased by 1 is " + a; //putting the value of result into HTML element with 'inc' id
}

// This function will decrement a number by 1
function decremNum() {
  var b = 9.67; //declaring a variable and assigning it a number value
  b--;
  document.getElementById("dec").innerHTML = "9.67 decreased by 1 is " + b; //putting the value of result into HTML element with 'dec' id
}
