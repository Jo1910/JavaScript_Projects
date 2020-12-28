// Concat Method
function mySentence() {
  // the concat method will join the following strings
  var part1 = "It doesn't "; // declaring variable 'part1' and assigning it the first part of the string
  var part2 = "sound like "; // declaring the variable 'part2' and assigning it the second part of the string
  var part3 = "that will ever be "; // declaring the variable 'part3' and assigning it the third part of the string
  var part4 = "on my travel list."; // declaring the variable 'part4' and assigning it the fourth - last part of the string
  var sentence = part1.concat(part2, part3, part4); // declaring variable 'sentence' and assigning it the concat method / part of the code that will join the strings parts together
  document.getElementById("concatenate").innerHTML = sentence; // displaying the result of variable 'sentence' within the HTML element with 'concenate' id
}

// Slice Method
function mySlice() {
  // the slice method will extract the part of the string
  var sentence = "The quick brown fox jumps over the lazy dog."; // declaring local variable 'sentence' and assigning it a string
  var slc = sentence.slice(9, 19); // declaring local variable 'slc' and assigning it the method / part of the code that will extract the string, and adding it the start and end parameters
  document.getElementById("slice").innerHTML = slc; // displaying the result of variable 'slc' within the HTML element with 'slice' id
}

//Upper Case
function uppFunction() {
  // toUpperCase Method will convert the string to uppercase letters
  var upper = document.getElementById("upp").innerHTML; // declaring variable 'upper' and assigning it the HTML element with 'upp' id
  document.getElementById("upp").innerHTML = upper.toUpperCase(); // converting the string to uppercase and displaying within the above chosen element
}

// String search
function srcFunction() {
  // the search method will search a string for a specific value, and return the position of the match
  var a = "The waves were crashing on the shore"; // declaring the variable 'a' and assigning it a string
  var b = a.search("were"); // declaring the variable 'b' and assigning it the search method that will search for a position of the word 'were' in the string assigned to the variable a
  document.getElementById("srch").innerHTML = b; // displaying the result of variable 'b' within the HTML element with 'srch' id
}

// to string
function numToStr() {
  // to string method will convert a number to a string
  var num = 167; // declaring a local variable and assigning it a number value
  document.getElementById("num").innerHTML = num.toString(); // displaying the result of the 'num' variable within the HTML element with 'num' id
}

// to precision
function precFunction() {
  // to precision method will format a number to a specified length
  var a = 145.678432; // declaring a variable and assigning it a number value
  document.getElementById("precis").innerHTML = a.toPrecision(5); // formating a number assigned to var 'a' to 5, and displaying it within the HTML element with 'precis' id
}

// to fixed
function fixFunction() {
  // to fixed method will convert a number to a string, rounding to a specified numbers of decimals
  var a = 45.78912; // declaring a local variable and assigning it a number value
  document.getElementById("fx").innerHTML = a.toFixed(2); // using 'to Fixed' method on 'a' variable requesting 2 decimals, and displaying the result within the HTML element with 'fx' id
}

// value of
function valueFunction() {
  // the valueOf method will return the primitive value of a string object
  var x = new String("Sun is shining."); // declaring local variable and assigning it a string
  document.getElementById("vl").innerHTML = x.valueOf(); // applying the 'valueOf' method to 'x'variable and displaying the result within the HTML element with 'vl' id
}
