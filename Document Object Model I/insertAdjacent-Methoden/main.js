"use strict";

let li = document.createElement("li");
li.setAttribute("id", "Mein Listenelement");

let a = document.createElement("a");
a.setAttribute("id", "Mein Ankerelement");
a.setAttribute("href", "#");

let text_node = document.createTextNode("Element");
a.appendChild(text_node);
li.appendChild(a);

let ul = document.querySelector("#navigation > ul");
//ul.insertAdjacentElement("beforebegin", li);
//ul.insertAdjacentElement("afterbegin", li);
//ul.insertAdjacentElement("beforeend", li);
//ul.insertAdjacentElement("afterend", li);

let dom_string = "<li id=\"mein-listenelement\"><a id=\"mein-ankerelement\" href=\"#\">Element</a></li>";

//ul.insertAdjacentHTML("beforebegin", dom_string);
//ul.insertAdjacentHTML("afterbegin", dom_string);
//ul.insertAdjacentHTML("beforeend", dom_string);
//ul.insertAdjacentHTML("afterend", dom_string);

let text = "Lorem ipsum dolor sit amet.";

//ul.insertAdjacentText("beforebegin", text);
//ul.insertAdjacentText("afterbegin", text);
//ul.insertAdjacentText("beforeend", text);
//ul.insertAdjacentText("afterend", text);