/*

Middleware automatically does preprocessing on requests

The easiest way to add middleware in express is using the 'app.use' method
The two simplest ways of using it is 'app.use(handler: RequestHandler)' or
  'app.use(path: string, handler: RequestHandler)'
  The first one applies for all requests to the server
  The second one applies only on the address provided

Here, we are using the 'express.json()' handler, which converts the
  request body to JSON, which we will use in the next part "APIs", and the
  'express.static(root: string)' handler, which serves static files from
  the folder 'root', which in this case is set to the 'public' folder

*/

import express from 'express';

var app = express(); // Create the app
const port = 80; // Define the port 


// Set up middleware
app.use(express.json());
app.use('/public', express.static('./8_-_Express_&_APIs/public2'));

app.get('/', (req, res) => { // Get request on '/' (root)
    res.end('<h1>This is a response from the server for the root address</h1>\
            <a href="/public/index.html">Static test page</a>');
});

app.get('*', (req, res) => { // Handle any other (404 errors)
    res.end('Page not found (404)');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}/`);
});