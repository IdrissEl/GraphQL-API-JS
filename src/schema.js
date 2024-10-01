export const typeDefs = `#graphql
    type Clothing {
        id: ID!,
        name: String!,
        description: String!,
        size: [String!]!,
        price: Float!,
        image: String!,
    }

    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
        author: String!,
    }

    type Brand {
        id: ID!,
        name: String!,
        description: String!,
        image: String!,
    }

    type Query {
        clothing: [Clothing],
        brands: [Brand],
        reviews: [Review],
        cloth(id: ID!): Clothing,
        brand(id: ID!): Brand,
        review(id: ID!): Review,
    }
`;