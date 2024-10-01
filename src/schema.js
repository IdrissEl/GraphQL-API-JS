export const typeDefs = `#graphql
    type Clothing {
        id: ID!,
        name: String!,
        description: String!,
        size: [String!]!,
        price: Float!,
        image: String!,
        brand: Brand!
        reviews: [Review!]
    }

    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
        author: String!,
        cloth: Clothing!
    }

    type Brand {
        id: ID!,
        name: String!,
        description: String!,
        image: String!,
        clothing: [Clothing!]
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