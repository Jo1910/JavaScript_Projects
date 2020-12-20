function addNumbers() {
  var Addition = 15 + 12;
  document.getElementById("add").innerHTML = "15 + 12 = " + Addition;
}

function subNumbers() {
  var Substract = 13 - 7;
  document.getElementById("sbt").innerHTML = "13 - 7 = " + Substract;
}

function multiplyNumbers() {
  var Multiply = 11 * 9;
  document.getElementById("mlt").innerHTML = "11 * 9 = " + Multiply;
}

function divideNumbers() {
  var Divide = 64 / 8;
  document.getElementById("dvd").innerHTML = "64 / 8 = " + Divide;
}

function multipleMath() {
  var Mulitple = 8 + (9 / 3) * 4 - 1;
  document.getElementById("mltm").innerHTML =
    "8 plus 9 divided by 3, multiplied by 4 and then substracted by 1 equals " +
    Mulitple;
}

function remainderMath() {
  var Remainder = 33 % 14;
  document.getElementById("rmn").innerHTML =
    "When you divide 33 by 14 you have a remainder of: " + Remainder;
}

function negMath() {
  var n = 5;
  document.getElementById("neg").innerHTML = -n;
}

window.alert(Math.random() * 100);

window.alert(Math.ceil(5.6));

var a = 7;
a++;
document.write(a);

document.write("<br>");

var b = 9.67;
b--;
document.write(b);
