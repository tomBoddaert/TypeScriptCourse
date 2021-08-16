/*

Express allows us to serve web pages and API requests over HTTP

First, we import the 'express' module
Then, we create an app using the 'express()' function
Then, we define its middleware (which we are not using here), then
  requests, then error handlers and finally tell it to "listen" to a
  specific port

*/

import express from 'express';

var app = express(); // Create the app
const port = 80; // Define the port 

app.get('/', (req, res) => { // Get request on '/' (root)
    res.end('<h1>This is a response from the server for the root address</h1>');
});

app.get('/page2', (req, res) => { // Get request on '/page2'
    res.end('<h1>This is a response from the server for page2</h1>');
});

app.get('*', (req, res) => { // Handle any other (404 errors)
    res.end('Page not found (404)');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}/`);
});