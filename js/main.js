$(document).ready(function() {
  var img = document.getElementsByTagName("img");
  var text = document.getElementById("text");

  for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", function() {
      var alt = this.alt;
      text.textContent = alt;
    });
  }
});




var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
  seconds += 1;
  el.innerText = "Vous êtes là depuis " + seconds + " secondes.";
}

var cancel = setInterval(incrementSeconds, 1000);
