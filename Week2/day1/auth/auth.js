

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
let city = 'varanasi'
let api_key = '';
let proxy = 'https://cors-anywhere.herokuapp.com/'

// Open a new connection, using the GET request on the URL endpoint
let url_string = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
request.open('GET', proxy+url_string, true)
//request.setRequestHeader('Access-Control-Allow-Origin', 'www.google.com');
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
