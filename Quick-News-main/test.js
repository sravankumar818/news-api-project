const fetch = require("node-fetch");

const API_KEY = "dd57c36c53d3449dabc85eaa1ccf6f12"; // Temporarily hardcode the API key
const url = `https://newsapi.org/v2/everything?q=India&apiKey=${API_KEY}`;

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
