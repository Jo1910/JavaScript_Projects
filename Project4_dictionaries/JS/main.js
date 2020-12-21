function Plants() { // declaring a function that will return a value of a dictionary key
  var Trees = { // declaring a variable that will act as a dictionary and hold an array of key-value pairs
    Species: "Black Oak", // adding key-value pair 1
    Country: "North America", // adding key-value pair 2
    Family: "Beech", // adding key-value pair 3
    Height: "50-60 feet", // adding key-value pair 4
  };
  delete Trees.Country; // deleting a chosen value from our dictionary array
  document.getElementById("dictionary").innerHTML = Trees.Country; // output of a chosen value from our dictionary
}
