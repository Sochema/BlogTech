/* AFFICHER DATE*/

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


/* TABLEAU */
function table(image, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    image.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


/* POUR AFFICHER ALT */
var img = document.getElementsByTagName("img");
var text = document.getElementsByTagName("p");

 for (let i = 0 ; i < img.length ; i++) {
   img[i].addEventListener("mouseover", function() {
     var alt = img[i].alt;
     text[i].textContent = alt;
   }
   );
 };


/* COMPTEUR */

var img = document.getElementsByTagName("img");
 var text = document.getElementsByTagName("p");

for (let i = 0 ; i < img.length ; i++) {
 img[i].addEventListener("mouseout", function() {
   text[i].textContent = "";
 }
 );
};



var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = "Vous êtes là depuis " + seconds + " secondes.";
}

var cancel = setInterval(incrementSeconds, 1000);
