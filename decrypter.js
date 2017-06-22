var d = new Date ();
var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
var i = 0;
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var minutes = addZero(d.getMinutes());
document.getElementById("date").innerHTML = days[d.getDay()] + " " + d.getDate() + " " + mois[d.getMonth()] + " " + d.getFullYear() + " - " + d.getHours() + ":" + minutes;

var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
  seconds += 1;
}

var cancel = setInterval(incrementSeconds, 1000);
