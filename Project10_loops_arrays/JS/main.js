// While loop will loop through a block of code as long as a specified condition is true
function Call_Loop() { 
  var Count = ""; // creating variable 'Count' and assigning it an empty string
  var i = 15; // creating variable 'i' and assigning it a number value
  while (i > 0) { // setting up condition for a while loop - as long as 'i' is bigger than 0
    Count += "<br>" + i; // increment 'Count' by 'i' and add a line break
    i--; // decreasing the variable used in condition
  }
  document.getElementById("Loop").innerHTML = Count; // displaying the value of 'Count' within the HTML element with the 'Loop' id
}


// For loop will loop through a block of code a known number of times
var Instruments = ["Violin", "Saxophone", "Cello", "Accordion", "Piano"]; // creating variable 'Instruments' and assigning it an array 
var showInstr = ""; // creating variable 'showInstr' and assigning it an empty string
var a; // declaring a variable
function for_Loop() { // creating a for loop function
  for (i = 0; i < Instruments.length; i++) { // setting a variable before the loop starts, defining the condition for the loop to run, increasing a value each time the code block in the loop has been executed 
    showInstr += Instruments[i] + "<br>"; // incrementing the value in variable 'showInstr' by 'i' and adding line break
  }
  document.getElementById("List_of_Instruments").innerHTML = showInstr; // displaying the value of 'showInstr' within the HTML element with 'List_of_Instruments' id
}


// array 
function grocery_items() { // creating a function that will return the chosen elements from the array
  var grocery = []; // creating variable 'grocery' and assigning it an empty array
  grocery[0] = "apple"; // adding the first element to the array
  grocery[1] = "bread"; // adding the second element to the array
  grocery[2] = "tuna"; // adding the third element to the array
  grocery[3] = "tomato"; // adding the fourth element to the array
  grocery[4] = "olives"; // adding the fifth element to the array
  document.getElementById("Array").innerHTML =
    "I will get some " + grocery[0] + " and " + grocery[3] + " from the shop."; // displaying the values of the array 'grocery' within the HTML element with the 'Array' id
}


// constant
function constant_function() { 
  const birds = { // creating an object with const keyword and including 3 properties with values
    species: "Seagull", 
    color: "grey", 
    diet: "anything", 
  };
  birds.habitat = "coastal areas"; // adding a property with a value
  birds.family = "gulls"; // adding a property with a value
  birds.color = "grey or white"; // changing the "grey" value for the color property to "grey or white"
  document.getElementById("Constant").innerHTML = birds.species + " are seabirds that are usually " + birds.color +" in color. They live in " + birds.habitat + '.'; // displaying a string that includes the added property value and the changed property value within the HTML element with the 'Constant' id
}


// object
let painting = { // creating an object with let keyword and assigning it 3 properties with values and a method
    artist: "Vincent van Gogh", // assigning the first property with a value to the object
    year: "1889", // assigning the second property with a value to the object
    name: "The Starry Night", // assigning the third property with a value to the object
    description: function() { // assigning a method to the object
        return this.name + " is an oil canvas painting by " + this.artist + ", painted in " + this.year + "."; // returning a string that includes the properties from the object
    }
};
document.getElementById('obj').innerHTML = painting.description(); // displaying the value of the method within the HTML element with 'obj' id


// The break statement will break the loop / stop the execution of code
var sentence = ""; // declaring the variable 'sentence' and assigning it an empty string
var a; // declaring the variable 'a'
for(a = 10; a > 0; a--) { // setting a variable before the loop starts, defining the condition for the loop to run, decreasing a value each time the code block in the loop has been executed 
    if(a === 5) {break;} // defining the condition for the code execution to stop
    sentence += "The number is " + a + "<br>"; // assigning a string to the 'sentence' and adding it the next iterations
}
document.getElementById('brk').innerHTML = sentence; // displaying the value of 'sentence' within the HTML element with 'brk' id


// The continue statement will break one iteration and continue with the next iteration in the loop
var colors = ["blue", "red", "green", "yellow", "purple", "orange"]; //creating a variable and assigning it an array
var b; // creating a variable 
var text = "" // creating a variable and assigning it an empty string
for (b = 0; b < colors.length; b++) { // setting a variable before the loop starts, defining the condition for the loop to run, increasing a value each time the code block in the loop has been executed 
    if(colors[b] === "yellow") { // defining the condition for the code execution to break one iteration and continue with the next iteration in the loop
        continue;
    }
    text += "The color is " + colors[b] + "." + "<br>"; // assinging a string to the 'text' varianle and adding it a next iteration and a line break
}
document.getElementById('ctn').innerHTML = text; // displaying the value of 'text' within the HTML element with 'ctn' id