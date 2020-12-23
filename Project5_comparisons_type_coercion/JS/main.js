document.write(typeof 10); // returning a data type

function notNum() {
  //this function will determine whether a value is a number
  document.getElementById("nan").innerHTML = isNaN("6"); // displaying the value to the HTML element with the 'nan' id
}

function not_Function() {
  // this function will return the inverted boolean value
  document.getElementById("Not").innerHTML = !(1 > 10); // comparing values and output by HTML element with 'Not' id
}

document.write("<br>"); // line break

document.write(2e310); // displaying infinity value

document.write("<br>"); //line break

document.write(-3e310); // displaying negative infinity value

document.write("<br>"); // line break

document.write(7 > 9 && 6 < 7); // returning boolean value with AND operator

document.write("<br>"); // line break

document.write("10" + 4); // adding a string to a number, which concenate them together in JavaScript

document.write("<br>"); // line break

document.write(20 == 20); //comparing two values with '==' operator, that compares values but not data types

document.write("<br>"); // line break
document.write("<br>");

document.write(3 === 3); // returning 'true' by comparing the same value and data type

document.write("<br>"); // line break

document.write("spring" === 9); // returning 'false' by comparing different value and different data type

document.write("<br>"); // line break

document.write("6" === 6); // returning 'false' by comparing the same value but different data type

document.write("<br>"); // line break

document.write("summer" === "winter"); // returning 'false' by comparing the same data type, but different value
document.write("<br>"); // line break
document.write("<br>"); // line break

document.write(10 > 5 && 6 > 8); // comparing two values with AND logical operator and returning false
document.write("<br>"); // line break

document.write(10 > 5 || 6 > 8); // comparing two values with OR logical operator and returning true

document.write("<br>"); // line break
