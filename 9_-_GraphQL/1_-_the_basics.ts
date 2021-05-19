/*

"GraphQL is a query language for APIs and a runtime for fulfilling those
  queries with your existing data. GraphQL provides a complete and
  understandable description of the data in your API, gives clients the
  power to ask for exactly what they need and nothing more, makes it
  easier to evolve APIs over time, and enables powerful developer tools."
  - https://graphql.org/

The first step to creating a GraphQL API is to write a "schema"
The schema describes how a GraphQL request to your API should be
  structured and what requests are valid

In this example, we are using a dataset of people
Each person has an id (string/id), a name (string), an age (number/int)
  and may have a list of friends (which are references to the other
  'Person' objects)

Types can be defined in GraphQL schemas much like classes in TypeScript
We use the 'type' keyword followed by the name (usually in PascalCase)
The basic types are:
  * String
  * Int
  * Float
  * Boolean
  * ID ( = String )
  * [x] (an array of type x)

Any properties that are non-nullable (must be defined) have their types
  appended by a '!', all others are optional by default

Each type contains methods
If these methods take arguments, they will define them and their types in
  brackets after their name
Then, their return type is stated

Types with the name of an "operation name" can be set to define how a
  specific operation should be layed out
The 'Query' type defines how a query should be structured

Once we have the schema, we can define the 'root' object
This object has functions that get or set the data, they take the
  arguments passed in through the GraphQL API as a single object, where
  the keys are the argument name

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
    getPerson({ id }: { id: string }) {
        // Find the person by the ID and return them
        return people.find(person => person.id === id);
    },
    getAllPeople() {
        // Return all the people
        return people;
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

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}/`);
});