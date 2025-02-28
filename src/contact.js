import outside from "./img/outside-view.png";

export function createContactContent () {
    let fullContent = document.createElement('div');
    fullContent.id = "content";

    let contactTitle = document.createElement('div');
    contactTitle.id = 'contact-title'; // assigns an id
    contactTitle.innerHTML = "<p>Contact Us</p>";
    fullContent.append(contactTitle);

    let staffContacts = document.createElement('div');
    staffContacts.id = "staff-contacts"; //staff container

    function contactContainer (title, text) {
        let container = document.createElement('div');
        container.classList.add('contact-container');


        let titleElement = document.createElement('div');
        titleElement.classList.add('contact-container-title');
        titleElement.innerHTML = title;

        let textElement = document.createElement('div');
        textElement.classList.add('contact-container-text');
        textElement.innerHTML = text;

        container.append(titleElement, textElement);
        staffContacts.append(container);
    }

    // order section
    let startersTitle = document.createElement('div');
    startersTitle.classList.add('orders-title') // assigns a class
    startersTitle.innerHTML = "<p>Order Now!</p> <p>tel: 555-555-5555</p>";
    fullContent.append(startersTitle); // orders menu

    fullContent.append(staffContacts); //staff menu for better visuals

    // staff contacts
    contactContainer("<p>Chef 👨‍🍳</p>", "<p><a>111-111-1111</a></p>");
    contactContainer("<p>Manager 🧑‍💼</p>", "<p><a>222-222-2222</a></p>");
    contactContainer("<p>#1 Customer 🥇</p>", "<p><a>333-333-333</a></p>");

    let imageElement = document.createElement('img');
    imageElement.classList.add('contact-image');
    imageElement.src = outside;

    fullContent.append(imageElement);

    return fullContent;
};