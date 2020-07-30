

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
let url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
let proxy = 'https://cors-anywhere.herokuapp.com/'
request.open('GET', proxy+url_string, true)
//request.setRequestHeader('Access-Control-Allow-Options', '*');
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
