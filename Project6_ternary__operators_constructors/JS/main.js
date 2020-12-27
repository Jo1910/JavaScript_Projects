// Ternary Operator
function Vote_Function() {
  var Age, Can_Vote; //declaring variables
  Age = document.getElementById("age").value; // returning a value of variable 'Age' through the HTML element with 'age' id
  Can_Vote = Age < 18 ? "You aren't old enough" : "You are old enough"; // assigning a conditional ternary operator to a variable 'Can_Vote'
  document.getElementById("vote").innerHTML = Can_Vote + " to vote."; // putting the value of 'Can_Vote' variable into the HTML element with 'vote' id
}

// Constructor
function Animal(Species, Color, Diet) { // declaring a function and adding it 3 properties
  this.Animal_Species = Species; // assigning 'Species' parameter to the 'Animal' object using 'this' keyword
  this.Animal_Color = Color; // assigning 'Color' parameter to the 'Animal' object using 'this' keyword
  this.Animal_Diet = Diet; // assigning 'Diet' parameter to the 'Animal' object using 'this' keyword
}

var animal1 = new Animal("squirrel", "grey", "nuts"); // creating a new instance of 'Animal' object with 'new' keyword
var animal2 = new Animal("seal", "brown, white or grey", "seafood"); // creating a new instance of 'Animal' object with 'new' keyword
var animal3 = new Animal("wolf", "grey, black, reddish or white", "meat"); // creating a new instance of 'Animal' object with 'new' keyword

function myFunction2() {
  // displaying the result of the constructor function within the HTML element with 'New_and_This' id
  document.getElementById("New_and_This").innerHTML ="I see a " + animal1.Animal_Species + " on a tree. It is " + animal1.Animal_Color + " and eats " + animal1.Animal_Diet + ".";
}

// Nested function
function my_Fun_1() {
  var a = 8; // declaring variable a
  var b = 9; // declaring variable b
  function my_Fun_2() { // declaring nested function that will take values from variables inside the parent function and multiply them
    return a * b; // returning a result value
  }
  document.getElementById("Nested_Function").innerHTML = my_Fun_2(); // putting the value of 'My_Fun_1' function into the HMTL element with 'Nested_Function' id
}
