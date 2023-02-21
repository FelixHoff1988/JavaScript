"use strict";

let div = document.createElement("div");
div.setAttribute("id", "meine_id");
div.setAttribute("class", "meine_klasse");
let text = document.createTextNode("Lorem ipsum dolor sit amet.")

// appendChild()-Methode: fügt ein Element als letztes Kindelement in ein Elternelement ein
// Syntax: elternelement.appendChild(kindelement);
// existiert das Kindelement im Eltenelement bereits, wird es entfernt und stattdessen als letztes Kindelement wieder angefügt. 

// Text zum div-Element hinzugefügen
div.appendChild(text);

// Section im Jumbotron selektieren
let jumbo = document.querySelector(".jumbotron");
// div-Element zur Section im Jumbotron hinzufügen
jumbo.appendChild(div);

// erstes Listenelement in ul in Navigation selektiert
let li = document.querySelector("#navigation > ul > li");

// ul in Navigation selektiert
let ul = document.querySelector("#navigation > ul");
// erstes Listenelement der ul erneut in ul hinzugefügt (allerdings durch appendChild()-Methode als letztes Kindelement)
ul.appendChild(li);