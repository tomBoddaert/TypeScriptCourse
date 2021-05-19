/*

Here, we have created a "REST API" (REpresentational State Transfer
  Application Programming Interface) with the '/api' root endpoint
This means that all of our API endpoints are part of '/api'
REST APIs have seperate endpoints for each type of request

Using the API: ./public2/using_the_api.ts

*/

import express from 'express';

var app = express(); // Create the app
const port = 80; // Define the port

// Convert the request bodies to JSON
app.use(express.json());
app.use(express.static('./8_-_Express_and_APIs/public2'));

app.get('/', (req, res) => { // Get request on '/' (root)
    res.end('<h1>This is a response from the server for the root address</h1>\
            <a href="/api.html">API test page</a>');
});

// Echo the 'text' field
app.post('/api/echo', (req, res) => {
    if (typeof req.body.text !== 'string') return res.end('{"error":"Malformed request body!"}');
    res.end(JSON.stringify({
        text: req.body.text
    }));
});

// Raise a 'base' to the power of an 'index'
app.post('/api/power', (req, res) => {
    let base = parseInt(req.body.base);
    let index = parseInt(req.body.index);
    if (isNaN(base) || isNaN(index)) return res.end('{"error":"Malformed request body!"}');
    res.end(JSON.stringify({
        result: base ** index
    }));
});

app.post('/api/*', (req, res) => { // Handle non-api endpoints
    res.end('{"error":"No api at this address!"}');
})

app.get('*', (req, res) => { // Handle any other (404 errors)
    res.end('Page not found (404)');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}/`);
});