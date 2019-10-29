// Create a request var and assign a new XMLHttpRequest to it
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    // begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // Log each movie's title
            console.log(movie.title);
        });
    } else {
        console.log('error');
    }
        
};

// Send request
request.send();