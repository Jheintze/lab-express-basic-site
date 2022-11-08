// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// home route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
