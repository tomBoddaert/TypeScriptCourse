/*

Here, we use the 'fetch' API to make a request to our API
The fetch API is a promise based API, this means that the
  'fetch(url: string, options: Object)' function returns a promise, we can
  then call the 'then(callback: Function)' method to add a callback
  If the callback return another promise, we can "chain" them

*/

// Instantiate the element variables
var baseElem: HTMLInputElement | null;
var indexElem: HTMLInputElement | null;
var outputElem: HTMLElement | null;

// Set the element variables when the DOM has loaded
document.addEventListener('DOMContentLoaded', ev => {
    baseElem = document.getElementById('baseInput') as (HTMLInputElement | null);
    indexElem = document.getElementById('indexInput') as (HTMLInputElement | null);
    outputElem = document.getElementById('output');
});

// Function for the button
function sendReq() {
    // Make sure all element variables are defined
    if (!baseElem || !indexElem || !outputElem) return;
    // Create the fetch request
    fetch('/api/power', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            base: baseElem.value,
            index: indexElem.value
        })
    })
        // Convert the response body to JSON
        .then(data => data.json())
        // Deal with the response
        .then(data => {
            if (!outputElem) return;
            if (data.error) return outputElem.innerText = data.error;
            outputElem.innerText = data.result;
      });
}