const { gql } = require('apollo-server');

const productTypeDefs = gql `
    type Product {
        id: Int!
        name: String
        price: Int
        city: String
        description: String
    }

    input inProduct {
        id: Int!
        name: String!
        price: Int!
        city: String!
        description: String!
    }

    input updateProduct {
        name: String!
        price: Int!
        city: String!
        description: String!
    }

    extend type Query {
        productById(id: Int!): Product!
        products: [Product]
    }
    
    extend type Mutation {
        createProduct(inputProduct: inProduct!): Product!
        updateProduct(id: Int!, product: updateProduct!): Product!
        deleteProduct(id: Int!): String!
    }
`;
module.exports = productTypeDefs;