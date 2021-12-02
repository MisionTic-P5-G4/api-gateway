const { gql } = require('apollo-server');

const productTypeDefs = gql `
    type Product {
        id: Int!
        name: String!
        price: Int!
        isService: Boolean!
    }

    input inProduct {
        name: String!
        price: Int!
        isService: Boolean!
    }

    input updateProduct {
        name: String!
        price: Int!
        isService: Boolean!
    }

    extend type Query {
        productById(id: Int!): Product!
        products: [Product]
        productsByService(state: Boolean!): [Product]
    }
    
    extend type Mutation {
        createProduct(inputProduct: inProduct!): Product!
        updateProduct(id: Int!, product: updateProduct!): Product!
        deleteProduct(id: Int!): String!
    }
`;
module.exports = productTypeDefs;