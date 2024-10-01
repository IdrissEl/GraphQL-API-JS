import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Import Schema
import { typeDefs } from "./schema.js";

// Resolvers
const resolvers = {
    Query: {
        clothing() {
            return db.clothing;
        },
        reviews() {
            return db.reviews;
        },
        brands() {
            return db.brands;
        } 
    }
}

// Import db
import db from "./_db.js";

// Setup the server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);