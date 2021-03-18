# Explain eventListener with example  

Event listeners are on of the JavaScript method in web design. They allow us to add interactive functionality to HTML elements by “listening” to different events that take place on the page, such as when the user clicks a button, presses a key, or when an element loads.

When an event happens, we can execute something.

const button = document.querySelector("button");


function alertButton() {

    alert("Hello, it's a wonderful day");
}

button.addEventListener("click", alertButton);