
const typeDefs = `
  # User Type: Represents a user object in the system.
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
  }

  # Book Type: Represents a book object in the system.
  type Book {
    bookId: String!
    authors: [String]!
    description: String!
    title: String!
    image: String
    link: String
  }

  # Auth Type: Used for authentication responses.
  type Auth {
    token: String!
    user: User!
  }

  # Query Type: Contains queries to fetch data.
  type Query {
    me: User
  }

  # Mutation Type: Contains mutations to modify data.
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookInput: BookInput!): User
    removeBook(bookId: String!): User
  }

  # Input Type for adding or saving a book
  input BookInput {
    authors: [String]!
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }
`;

export default typeDefs;