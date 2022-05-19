const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID!
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}
type Book {
  bookId: String!
  authors: [String]
  username: String
  description: String
  title: String
  link: String
  image: String
}
input BookArgs {
  authors: [String]
  description: String
  title: String
  bookId: String
  link: String
  image: String
}

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
  addBook(newBook: BookArgs): User
  deleteBook(bookId:ID!): User
}
`;

module.exports = typeDefs;