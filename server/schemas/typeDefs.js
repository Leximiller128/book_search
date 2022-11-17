const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    # Add a queryable field to retrieve an array of Book objects
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    name: String
    description: String
    title: String!
    image: String
    # Add a queryable field to retrieve a single Book object
    link: String
  }

  input BookInput {
    bookId: ID!
    authors: [String]
    name: String
    description: String
    title: String!
    image: String
    # Add a queryable field to retrieve a single Book object
    link: String
  }

  # Define what can be queried for each Auth
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
