function time1() {
  var str = "It is now a good time for a coffee"; //defining a variable and giving it a string value
  var result = str.fontcolor("red"); // using the fontcolor method on str variable
  document.getElementById("btn1").innerHTML = result; // putting the value of result into HTML element with 'btn1' id
}

function time2() {
  var date = new Date(); // defining a variable and giving it a new date object
  document.getElementById("btn2").innerHTML = date; // putting the value of date into HTML element with 'btn2' id
}

// concenate
function random() {
  var mouse = "The grey mouse run into the leaves"; // defining a variable and giving it a string value
  mouse += " near the old brown trees."; // adding another string to the 'mouse' variable
  document.getElementById("sentence").innerHTML = mouse; // putting the value of mouse into HTML element with 'sentence' id
}
