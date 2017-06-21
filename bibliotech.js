var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = "Vous êtes là depuis " + seconds + " secondes.";
}

var cancel = setInterval(incrementSeconds, 1000);
