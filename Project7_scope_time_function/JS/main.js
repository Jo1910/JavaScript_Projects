var a = 13; // declaring a global variable
function multNumbers() { // declaring a function that will multiply number 10 by the value of global variable 'a'
  var b = 8; // declaring a local variable
  document.write(a * 10); // multiplying
}

function divNumbers() { // declaring a function that will divide
  document.write(a / b); // dividing global by local variable, intentional error
}

multNumbers(); // displaying the result of 'multiNumbers' function
document.write("<br>"); // new line

divNumbers(); // displaying the result of 'divNumbers' function
document.write("<br>"); // new line

// Time function
function Time_function() {
  var Time = new Date().getHours(); // declaring a variable and assigning it a new date with the current time object
  var Reply; // delcaring a variable
  if (Time < 12 == Time > 0) {// if statement - if time is between 0 and 12
    Reply = "It is morning time!"; // assigning the value to the variable 'Reply', that will execute if the condition is true
  } else if (Time > 12 == Time < 18) { // else if statement - if time is between 12 and 18
    Reply = "It is the afternoon."; // code to run if the 'if' statement is found to be false
  } else { // else statement
    Reply = "It is evening time!"; // code to run if both 'if' and 'else if' statements are found to be false
  }
  document.getElementById("Time_of_day").innerHTML = Reply; // displaying the value of 'Reply' variable within the HTML element with 'Time_of_day' id
}

// weather if statement
function weatherToday() {
  var weather = document.getElementById("input").value; // declaring a variable and assigning it the value of the HTML element input
  if (weather == "sunny") {
    document.getElementById("weather").innerHTML =
      "It's a lovely day! Enjoy your walk!"; // code to run if the condition is true
  } else if (weather == "rainy") {
    document.getElementById("weather").innerHTML =
      "Don't forget your umbrella!"; // code to run if the 'if' statement is false and user input value is 'rainy'
  } else if (weather == "cold") {
    document.getElementById("weather").innerHTML =
      "Don't forget to wear a warm coat"; // code to run if 'if' and the previous 'else if' statements are false, and if user input value is 'cold'
  } else if (weather == "warm") {
    document.getElementById("weather").innerHTML =
      "Hey, lucky you! Enjoy your day!"; // code to run if 'if' and the previous 'else if' statements are false, and if user input value is 'warm'
  } else {
    document.getElementById("weather").innerHTML =
      "Please come back when I update my program."; // code to run if all the previous statements are false
  }
}

//if else statement
function areYouHungry() {
  var answer = document.getElementById("hungry_or_not").value; // declaring a variable and assigning it a value within the HTML element with 'hungry_or_not' id
  if (answer == "yes") {
    document.getElementById("hungry").innerHTML = "Please, have your dinner"; // code to run if condition is found to be true
  } else {
    document.getElementById("hungry").innerHTML = "Would you like a dessert?"; // code to run if condition is found to be false
  }
}
