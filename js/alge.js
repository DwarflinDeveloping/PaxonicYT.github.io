function farbe() {
    var Ergebnis = document.getElementById("ergebnis");
    var Farben = new Array("Grün","Rot");
    var Farbe = Farben[Math.floor(Math.random() * items.length)];
     Ergebnis.innerHTML = Farbe;
    }

 function alge() {
    var Ergebnis = document.getElementById("ergebnis");
     Ergebnis.innerHTML =  "Alge " + Math.floor((Math.random() * 5) + 2);
 }

 function iframe_farbe(url) {
    document.getElementById('iframe').src = "farbe.html";
 }

 function iframe_alge(url) {
    document.getElementById('iframe').src = "alge.html";
 }

 function iframe_about(url) {
    document.getElementById('iframe').src = "about.html";
 }