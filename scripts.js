// set DOM objects
const app = document.getElementById("root");
const logo = document.createElement("img");
const container = document.createElement("div");

// set logo img
logo.src = "./logo.png";

// add attributes to container
container.setAttribute('class', 'container');

// add logo and container to app
app.appendChild(logo);
app.appendChild(container);

// Create a request var and assign a new XMLHttpRequest to it
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    // begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // Log each movie's title and desciption
            // console.log(movie.title);
            // console.log(movie.description);

            // Create div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // Create a p and set the text content to the film's description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); // limit to 300 chars
            p.textContent = `${movie.description}...` // end with ellipses

            // Append cards to the container element
            container.appendChild(card);

            // each card only contains h1 and p
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        console.log('error');
    }
        
};

// Send request
request.send();