export function createHomeContent() {
    let fullContent = document.createElement('div');
    fullContent.id = 'content';
    
    // this is the content's title
    let homeTitle = document.createElement('div');
    homeTitle.id = 'home-title'; // assigns an id
    homeTitle.innerHTML = "<p>Restaurant Empire</p>";
    fullContent.append(homeTitle);
    
    function homeContainer (title, text) {
        let container = document.createElement('div');
        container.classList.add('home-container'); // create container
    
        let titleElement = document.createElement('div');
        titleElement.classList.add('home-container-title');
        titleElement.textContent = title; // set text content
    
        let textElement = document.createElement('div');
        textElement.classList.add('home-container-text');
        textElement.innerHTML = text; // set text content
    
    
        container.append(titleElement, textElement);
    
        fullContent.appendChild(container); //appends to full content
    }
    
    let sectionOneTitle = 'You should visit us!';
    let sectionOneText =  "<p>Experience fine dining like never before. 🍷✨</p> <p>Savor exquisite flavors in an elegant atmosphere.</p> <p><strong>Reserve your table today!</strong></p>"
    homeContainer(sectionOneTitle, sectionOneText);
    
    //this is the comment section!
    let commentBox = document.createElement('div');
    commentBox.classList.add('home-container');
    let commentary = document.createElement('div');
    commentary.classList.add('commentary');
    let commentAuthor = document.createElement('div');
    commentAuthor.classList.add('commentAuthor');
    
    commentary.innerHTML = `<q>This restaurant is so awesome, I've visited it many times and have always felt welcome there! And the dishes are the best available in the region... for a fair price!</q>`;
    commentAuthor.textContent = "- Anonymous #1 costumer ❤️";
    commentBox.append(commentary, commentAuthor);
    fullContent.append(commentBox);
    
    let hoursSectionTitle = "Hours 🕰️";
    let hoursContent = "<p>Sunday: 1pm - 1am</p> <p>Monday: 11am - 10pm</p> <p>Tuesday: 11am - 10pm</p> <p>Wednesday: 11am - 10pm</p> <p>Thursday: 11am - 10pm</p> <p>Friday: 11am - 10pm</p> <p>Saturday: 1pm - 1am</p>"
    homeContainer(hoursSectionTitle, hoursContent);
    
    let locationTitle = "Location 🏰";
    let locationText = "Saint-Émilion, France 🇫🇷";
    homeContainer(locationTitle, locationText);

    return fullContent;
};