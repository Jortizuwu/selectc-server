const { gql } = require('apollo-server')

const typeDefs = gql`
  interface MutationResponse {
    code: Int!
    success: Boolean!
    message: String
  }

  type User {
    uid: ID
    name: String
    lastName: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
    age: Int
    gender: String
    income: Int
    Status: Status
    Role: Role
  }

  type Role {
    roleID: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type Status {
    statusID: ID
    statusCode: String
    createdAt: String
    updatedAt: String
  }

  # enums
  enum AllRoles {
    ADMIN
    USER
  }
  enum AllStatus {
    ACTIVE
    INACTIVE
  }

  # responses
  type RoleResponse implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String
    role: Role
  }

  type UserResponse implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String
    user: User
    token: String
  }

  type StatusResponse implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String
    status: Status
  }

  # QUERY
  type Query {
    # user
    getUsers: [User]
    getUserById(uid: ID!): UserResponse

    # role
    getRoles: [Role]
  }

  # MUTATION
  type Mutation {
    # user
    createUser(
      name: String!
      lastName: String!
      email: String!
      password: String!
      RoleName: AllRoles!
    ): UserResponse

    updateUser(
      uid: ID
      name: String
      lastName: String
      email: String
      age: Int
      gender: String
      income: Int
      oldPassword: String
      newPassword: String
    ): UserResponse

    deleteUser(uid: ID!): UserResponse
    disableOrActiveUser(uid: ID!): UserResponse

    # role
    createRole(name: AllRoles!): RoleResponse

    #status
    createStatus(statusCode: AllStatus!): StatusResponse

    # auht
    loginWhitEmailAndPassword(email: String!, password: String!): UserResponse

    loginWhitToken(token: String!): UserResponse
  }
`
module.exports = typeDefs
