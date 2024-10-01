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
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id);
        },
        brand(_, args) {
            return db.brands.find((brand) => brand.id === args.id);
        },
        cloth(_, args) {
            return db.clothing.find((cloth) => cloth.id === args.id);
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