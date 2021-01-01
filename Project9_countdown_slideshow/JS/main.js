 function countdown() { // declaring a function 'countdown' 
  var seconds = document.getElementById("seconds").value; // declaring a variable 'seconds' and assigning it a value within the HTML element with the 'seconds' id

  
  function tick() { // declaring nested function 'tick'
    seconds = seconds - 1; // decreasing the 'seconds' value by 1
    timer.innerHTML = seconds; // displaying 'seconds' within the HTML element with 'timer' id
    setTimeout(tick, 1000);  // using setTimeOut method that takes 'tick' function and 1000 ms as parameters
    if (seconds == -1) { // setting up condition 
      alert("Time's up!"); // to show if the condition is true
    }
  }
  tick(); // calling 'tick' function
} 


// SLIDESHOW

var slideIndex = 1; // declaring variable 'slideIndex' and assigning it a number 1 value
showSlides(slideIndex); // calling a function 'showSlides' that takes 'slideIndex' value as a parameter

// function 'plusSlides' is triggered by arrows on left and right
function plusSlides(n) { // declaring a function 'plusSlides' and passing it 'n' as a parameter (n as athe onclick attribute)
  showSlides(slideIndex += n); // calling a nested function 'showSlides' that will increase slide index by 1 and show that slide
}

// function 'CurrentSlide' is triggered by dots beneath picture
function currentSlide(n) { // declaring a function 'currentSlide' and passing it 'n' as a parameter
  showSlides(slideIndex = n); // calling a nested function 'showSlides' that will show the current slide
}

function showSlides(n) { 
  var i; // declaring variable 'i'
  var slides = document.getElementsByClassName("mySlides"); // declaring var 'slides' and assigning it HTML elements with the class 'mySlides'
  var dots = document.getElementsByClassName("dot"); // declaring var 'dots' and assigning it HTML elements with the class 'dot'
  if (n > slides.length) { // initiating conditional statement - if slide is greater than a total number of slide
    slideIndex = 1;
  }
  if (n < 1) { // if slide index is less than 1 
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) { // hide each of the slides
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { // replace each of the dots with the class 'active' with ""
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; // set the current slide to display as a block element
  dots[slideIndex-1].className += " active"; // set the current slide's dot to the 'active' class
}
