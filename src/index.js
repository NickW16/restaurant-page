import "./style.css";
import { createHomeContent } from "./home.js";
import { createMenuContent } from "./menu.js";
import { createContactContent } from "./contact.js";

let fullContent = document.getElementById('content');
fullContent.appendChild(createHomeContent());

// home button functionality
let homeButton = document.getElementById('home-button');
homeButton.addEventListener("click", () => {
    fullContent.innerHTML = ""; // clear the content
    fullContent.appendChild(createHomeContent());
});

// menu button functionality
let menuButton = document.getElementById('menu-button');
menuButton.addEventListener("click", () => {
    fullContent.innerHTML = "";
    fullContent.appendChild(createMenuContent());
});

let contactButton = document.getElementById('contact-button');
contactButton.addEventListener("click", () => {
    fullContent.innerHTML = "";
    fullContent.appendChild(createContactContent());
})