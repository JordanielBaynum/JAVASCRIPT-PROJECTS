
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        TimeRanges. innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            TimeRanges.innerHTML = "";
            document.getElementById("seconds").disabled = false;
            return;        
        }
    }
    tick(); 
   
}

//! This is a simple image slider implementation*//
let slideIndex = 1;
showSlides(slideIndex);

//! Next/previous controls*//
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//! Thumbnail image controls*//
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//! Image slider function to show slides based on the current index*//
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //! Get all elements with the class "mySlides"   
  let dots = document.getElementsByClassName("dot"); //! Get all elements with the class "dot"*//
  if (n > slides.length) {slideIndex = 1} //! If the index exceeds the number of slides, reset to the first slide*//
  if (n < 1) {slideIndex = slides.length} //! If the index is less than 1, set it to the last slide*//
  for (i = 0; i < slides.length; i++) { //! Loop through all slides and hide them*//
    slides[i].style.display = "none"; //! Set the display style of each slide to "none"*//
  }
  for (i = 0; i < dots.length; i++) { //! Loop through all dots and remove the "active" class*//
    dots[i].className = dots[i].className.replace(" active", ""); //! Remove the "active" class from each dot*//
  }
  slides[slideIndex-1].style.display = "block"; //! Show the current slide by setting its display style to "block"*//
  dots[slideIndex-1].className += " active"; //! Add the "active" class to the current dot*//
}