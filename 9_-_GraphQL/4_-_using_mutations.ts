// Initialising the element variables
var idInput: HTMLInputElement | null;
var nameInput: HTMLInputElement | null;
var ageInput: HTMLInputElement | null;
var friendsTable: HTMLTableElement | null;

// Setting the element variables on load
document.addEventListener('DOMContentLoaded', ev => {
    idInput = document.getElementById('idInput') as (HTMLInputElement | null);
    nameInput = document.getElementById('nameInput') as (HTMLInputElement | null);
    ageInput = document.getElementById('ageInput') as (HTMLInputElement | null);
    friendsTable = document.getElementById('friendsTable') as (HTMLTableElement | null);
});

// Button callback to create new row in 'friendsTable'
function addFriend() {
    if (!friendsTable) return;
    // Create a new row
    let newRow = friendsTable.insertRow();
    // Create a new cell for the input
    newRow.insertCell(0).innerHTML = '<input type="number">';
    // Create a new button to remove the row
    let newRemoveButton = newRow.insertCell(1);
    newRemoveButton.innerHTML = '<button>-</button>';
    // Add an "event listener" on the 'click' event to remove the row
    newRemoveButton.addEventListener('click', () => newRow.remove());
}

interface Person {
    id: string,
    name: string,
    age: number,
    friends?: Person[]
}

// Function to display a 'Person'
function outputPerson(person: Person) {
    if (!idInput || !nameInput || !ageInput || !friendsTable) return;
    // Make sure the 'person' is defined
    if (!person) return alert('ID provided does not exist!');
    // Set the values
    idInput.value = person.id;
    nameInput.value = person.name;
    ageInput.value = person.age.toString();
    // Reset the table
    friendsTable.innerHTML = '';
    // If the 'person' has no friends, stop
    if (!person.friends) return;
    // For every friend:
    for (let friend of person.friends) {
        // Create a new row, cell and input
        let newRow = friendsTable.insertRow();
        let newIDCell = newRow.insertCell(0);
        let newIDInput = document.createElement('input');
        // Set the input type to 'number'
        newIDInput.type = 'number';
        // Add the input and the name to the cell
        newIDCell.appendChild(newIDInput);
        newIDCell.innerHTML += friend.name;
        // Add the cell to the row
        newRow.appendChild(newIDCell);
        // Create a new button to remove the row
        let newRemoveButton = newRow.insertCell(1);
        newRemoveButton.innerHTML = '<button>-</button>';
        // Add an "event listener" on the 'click' event to remove the row
        newRemoveButton.addEventListener('click', () => newRow.remove());
        // Set the value of the input to the friend's ID
        if (friendsTable.firstChild?.lastChild?.firstChild?.firstChild) (friendsTable.firstChild.lastChild.firstChild.firstChild as HTMLInputElement).value = friend.id;
    }
}

// Button callback to get the person by ID
function getPerson() {
    if (!idInput) return;
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
                person: getPerson(id: $id) {
                    id
                    name
                    age
                    friends {
                        id
                        name
                    }
                }
            }
            `,
            // Variables used in query
            variables: {
                id: idInput.value
            }
        })
    })
        .then(data => data.json())
        .then(({ data }) => outputPerson(data.person))
        .catch(console.error);
}

// Button callback to edit the person by ID
function editPerson() {
    if (!idInput || !nameInput || !ageInput || !friendsTable) return;
    // Create a friends' IDs array
    let friends: string[] = [];
    // For every row in the 'tbody'
    for (let i = 0; i < (friendsTable.children.item(0)?.children.length ?? 0); i++) {
        // Get the row
        let row = friendsTable.children.item(0)?.children.item(i);
        // Get the ID input
        let friendIDInput = row?.children.item(0)?.children.item(0) as (HTMLInputElement | null);
        if (!friendIDInput) continue;
        // Append the id from the input to the 'friends' array
        friends.push(friendIDInput.value);
    }
    fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: stringified JSON containing the query and variables
        body: JSON.stringify({
            // GraphQL query string
            query: `
            mutation($id: ID!, $name: String!, $age: Int!, $friends: [ID!]!) {
                person: editPerson(id: $id, name: $name, age: $age, friends: $friends) {
                    id
                    name
                    age
                    friends {
                        id
                        name
                    }
                }
            }
            `,
            // Variables used in query
            variables: {
                id: idInput.value,
                name: nameInput.value,
                age: parseInt(ageInput.value),
                friends: friends
            }
        })
    })
        .then(data => data.json())
        .then(({ data }) => outputPerson(data.person))
        .catch(console.error);
}

// Button callback to add a person by ID
function addPerson() {
    if (!nameInput || !ageInput || !friendsTable) return;
    // Create a friends' IDs array
    let friends: string[] = [];
    // For every row in the 'tbody'
    for (let i = 0; i < (friendsTable.children.item(0)?.children.length ?? 0); i++) {
        // Get the row
        let row = friendsTable.children.item(0)?.children.item(i);
        // Get the ID input
        let friendIDInput = row?.children.item(0)?.children.item(0) as (HTMLInputElement | null);
        if (!friendIDInput) continue;
        // Append the id from the input to the 'friends' array
        friends.push(friendIDInput.value);
    }
    fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: stringified JSON containing the query and variables
        body: JSON.stringify({
            // GraphQL query string
            query: `
            mutation($name: String!, $age: Int!, $friends: [ID!]!) {
                person: addPerson(name: $name, age: $age, friends: $friends) {
                    id
                    name
                    age
                    friends {
                        id
                        name
                    }
                }
            }
            `,
            // Variables used in query
            variables: {
                name: nameInput.value,
                age: parseInt(ageInput.value),
                friends: friends
            }
        })
    })
        .then(data => data.json())
        .then(({ data }) => outputPerson(data.person))
        .catch(console.error);
}

function deletePerson() {
    if (!idInput) return;
    fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: stringified JSON containing the query and variables
        body: JSON.stringify({
            // GraphQL query string
            query: `
            mutation($id: ID!) {
                success: deletePerson(id: $id)
            }
            `,
            // Variables used in query
            variables: {
                id: idInput.value
            }
        })
    })
        .then(data => data.json())
        .then(({ data }) => {
            if (!data.success) alert('Deletion failed!');
            if (!idInput || !nameInput || !ageInput || !friendsTable) return;
            // Reset all the inputs
            idInput.value = '';
            nameInput.value = '';
            ageInput.value = '';
            friendsTable.innerHTML = '';
        })
        .catch(console.error);
}