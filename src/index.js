import "./style.css";
import lasagnaImage from "./img/lasagna.png";

(function () {
let fullContent = document.getElementById('content');

// this is the content's title
let homeTitle = document.createElement('div');
homeTitle.id = 'home-title'; // assigns an id
homeTitle.textContent = 'This is a cool restaurant!!';
fullContent.append(homeTitle);


//this is the comment section!
let commentBox = document.createElement('div');
commentBox.classList.add('home-container');
let commentary = document.createElement('div');
commentary.classList.add('commentary');
let commentAuthor = document.createElement('div');
commentAuthor.classList.add('commentAuthor');

commentary.innerHTML = `<q>This restaurant is so awesome, I've visited it many times and have always felt welcome there! And the dishes are the best available in the region... for a fair price!</q>`;
commentAuthor.textContent = "- Anonymous #1 costumer";
commentBox.append(commentary, commentAuthor);
fullContent.append(commentBox);

function homeContainer (title, text) {
    let container = document.createElement('div');
    container.classList.add('home-container'); // create container

    let titleElement = document.createElement('div');
    titleElement.classList.add('home-container-title');
    titleElement.textContent = title; // set text content

    let textElement = document.createElement('div');
    textElement.classList.add('home-container-text');
    textElement.textContent = text; // set text content


    container.append(titleElement, textElement);

    fullContent.appendChild(container); //appends to full content
}

let sectionOneTitle = 'You should visit us!';
let sectionOneText = 'This is a restaurant that has many options of exuberant dishes!'
// sectionOne.append(sectionOneTitle, sectionOneText);
homeContainer(sectionOneTitle, sectionOneText);


})();