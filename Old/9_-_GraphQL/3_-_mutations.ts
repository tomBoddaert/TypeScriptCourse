/*

There are 3 operation type:
  * Query        - Get data (Already covered)
  * Mutation     - Modify data
  * Subscription - Subscribe to data

*/

import express from 'express';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

// 'fs' to read the files
import { readFile } from 'fs';

var app = express(); // Create the app
const port = 80; // Define the port

// Define our "schema"
const schema = buildSchema(`
type Query {
    getPerson(id: ID!): Person
    getAllPeople: [Person!]!
}

type Mutation {
    addPerson(name: String!, age: Int!, friends: [ID!]): Person
    editPerson(id: ID!, name: String, age: Int, friends: [ID!]): Person
    deletePerson(id: ID!): Boolean
}

type Person {
    id: ID!
    name: String!
    age: Int!
    friends: [Person!]
}
`);

// What the type would look like in TypeScript
interface Person {
    id: string,
    name: string,
    age: number,
    friends?: Person[]
}

// Defining our data
var people: Person[] = [
    {
        id: '0001',
        name: 'Alex Emerson',
        age: 23
    },
    {
        id: '0002',
        name: 'Yanis Ferry',
        age: 42
    },
    {
        id: '0003',
        name: 'Dottie Sparks',
        age: 34
    }
]

people[0].friends = [people[1]];
people[1].friends = [people[0]];

// Defining the 'root', the functions that access our data
var root = {
    // Query
    getPerson({ id }: { id: string }) {
        return people.find(person => person.id === id);
    },
    getAllPeople() {
        return people;
    },
    // Mutation
    addPerson({ name, age, friends }: { name: string, age: number, friends?: string[] }) {
        // If max number of people reached, stop
        if (parseInt(people[people.length - 1].id) >= 9999) return null;
        // Create new person
        let person: Person = {
            // Generate ID
            id: (parseInt(people[people.length - 1].id) + 1).toString().padStart(4, '0'),
            name: name,
            age: age
        }
        // Add the person to the array of people
        people.push(person);
        // If no friends specified, return the new person and stop
        if (!friends) return person;
        // Create new array of friends
        let newFriends: Person[] = [];
        // For every ID in the 'friends' array:
        for (let friendID of friends) {
            // Find the friend
            let friend = people.find(person => person.id === friendID);
            // If they don't exist, skip to the next one
            if (!friend) continue;
            // Add the friend to the list of friends
            newFriends.push(friend);
        }
        person.friends = newFriends.length !== 0 ? newFriends : undefined;
        // Return the new person
        return person;
    },
    editPerson({ id, name, age, friends }: { id: string, name?: string, age?: number, friends?: string[] }) {
        // Find the person with the ID specified
        let person = people.find(person => person.id === id);
        // If they don't exist, stop
        if (!person) return null;
        // If 'name' specified, set it
        if (name) person.name = name;
        // If 'age' specified, set it
        if (age) person.age = age;
        // If 'friends' is not specified, return the modified person and
        //  stop
        if (!friends) return person;
        // Create new array of friends
        let newFriends: Person[] = [];
        // For every ID in the 'friends' array:
        for (let friendID of friends) {
            // Find the friend
            let friend = people.find(person => person.id === friendID);
            // If they don't exist, skip to the next one
            if (!friend) continue;
            // Add the friend to the list of friends
            newFriends.push(friend);
        }
        person.friends = newFriends.length !== 0 ? newFriends : undefined;
        // Return the modified person
        return person;
    },
    deletePerson({ id }: { id: string }) {
        // For every person:
        for (let i = 0; i < people.length; i++) {
            // If the person's ID doesn't match, skip to the next one
            if (people[i].id !== id) continue;
            // Delete the person
            people.splice(i, 1);
            // Return 'true' and stop
            return true;
        }
        // Return false
        return false;
    }
}

// Set the GraphQL server as a middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,  // Set the 'schema'
    rootValue: root, // Set the 'root'
    graphiql: true   // Turn on the GraphiQL page
}));

app.get('/', (req, res) => {
    res.end('<a href="/graphql">GraphiQL</a><br><a href="/api">Using the API</a>');
});

app.get('/api', (req, res) => {
    readFile('./9_-_GraphQL/2_-_using_the_api.html', (err, data) => res.end(data));
});

app.get('/api.js', (req, res) => {
    readFile('./9_-_GraphQL/2_-_using_the_api.js', (err, data) => res.end(data));
});

app.get('/mutations', (req, res) => {
    readFile('./9_-_GraphQL/4_-_using_mutations.html', (err, data) => res.end(data));
});

app.get('/mutations.js', (req, res) => {
    readFile('./9_-_GraphQL/4_-_using_mutations.js', (err, data) => res.end(data));
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}/`);
});