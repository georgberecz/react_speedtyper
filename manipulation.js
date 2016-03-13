"use strict";

function manipulateDOM() {
	var contentDiv = document.querySelector("#content");
	contentDiv.innerHTML = "Hello World";
}

if (document.readyState === "complete") {
	manipulateDOM();
} else {
	document.addEventListener("DOMContentLoaded", manipulateDOM);
}