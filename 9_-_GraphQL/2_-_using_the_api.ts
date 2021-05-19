/*

To use the API, we can use the fetch API

Once again, we use the "POST" method
The 'Content-Type' is set to 'application/json'
The body is a string containing a JSON object with the query and any
  variables

The easiest way to create a "dynamic" query (one where parts may change)
  is to create a query using variables in place of any data that will vary
  and then define the variables in the 'variables' object

Variables are denoted by a '$' before their name
To use a variable in a query (or mutation), they must be declared
This is done by adding them in brackets after the operator and notating
  their type
e.g. query($id: ID!) ...

*/

// Initialising the element variables
var idInput: HTMLInputElement | null;
var nameOutput: HTMLElement | null;

// Setting the element variables on load
document.addEventListener('DOMContentLoaded', ev => {
    idInput = document.getElementById('idInput') as (HTMLInputElement | null);
    nameOutput = document.getElementById('nameOutput');
});

function sendGQLReq() {
    // Making sure the element variables have been set
    if (!idInput || !nameOutput) return;
    // Create the request
    fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: stringified JSON containing the query and variables
        body: JSON.stringify({
            // GraphQL query string
            query: `
            query($id: ID!) {
                getPerson(id: $id) {
                    name
                }
            }
            `,
            // Variables used in query
            variables: {
                id: idInput.value
            }
        })
    })
        // Parse the returned data to an object
        .then(data => data.json())
        // Get the 'data' from the object and output the name
        .then(({ data }) => {
            if (nameOutput) nameOutput.innerText = data.person.name;
        })
        // Catch any errors and output them to the console
        .catch(err => console.error(err))
}