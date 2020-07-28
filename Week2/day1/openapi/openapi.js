

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
let url_string = 'https://dog.ceo/api/breeds/list/all';
request.open('GET', url_string, true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}

/*
fetch(url_string)
.then(res=>res.json())
.then(data=>console.log(data))
*/
