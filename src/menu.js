import onionSoup from "./img/onion-soup.png";
import escargots from "./img/escargots.png";
import coq from "./img/coq-au-vin.png";

export function createMenuContent () {
    let fullContent = document.createElement('div');
    fullContent.id = "content";

    let menuTitle = document.createElement('div');
    menuTitle.id = 'menu-title'; // assigns an id
    menuTitle.innerHTML = "<p>Menu</p>";
    fullContent.append(menuTitle);


    function menuContainer (title, imageUrl, text, price) {
        let container = document.createElement('div');
        container.classList.add('menu-container');

        let textContainer = document.createElement('div');
        textContainer.classList.add('menu-text-container');
        container.append(textContainer); //appends to container

        let imageElement = document.createElement('img');
        imageElement.classList.add('menu-container-image');
        imageElement.src = imageUrl;
        imageElement.alt = `a picture of a delicious ${title}`;
        
        let titleElement = document.createElement('div');
        titleElement.classList.add('menu-container-title');
        titleElement.innerHTML = title; // set title content
    
        let textElement = document.createElement('div');
        textElement.classList.add('home-container-text');
        textElement.innerHTML = text; // set text content

        textContainer.append(titleElement, textElement);
        container.append(imageElement, textContainer);

        fullContent.appendChild(container);
    }

    let startersTitle = document.createElement('div');
    startersTitle.classList.add('menu-sections-title') // assigns a class
    startersTitle.innerHTML = "<p>Starters</p>";
    fullContent.append(startersTitle); // starters menu

    // add dishes
    menuContainer("<p>$8 - Soupe à l'Oignon</p>", onionSoup, "<p>Traditional French onion soup topped with a crispy cheese gratin. 🧅🧀</p>",);
    menuContainer("<p>$12 - Escargots de Bourgogne</p>", escargots, "<p>Burgundy snails cooked in garlic-parsley butter. 🐌🧄</p>");

    let mainCoursesTitle = document.createElement('div');
    mainCoursesTitle.classList.add('menu-sections-title') // assigns a class
    mainCoursesTitle.innerHTML = "<p>Main Courses</p>";
    fullContent.append(mainCoursesTitle); // main courses menu

    menuContainer("<p>$22 - Coq au Vin</p>", coq, "<p>Slow-cooked chicken in a rich red wine sauce with mushrooms and lardons. 🍷</p>");


    return fullContent;
};