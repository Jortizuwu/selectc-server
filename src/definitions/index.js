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
    Preferences: [Preference]
    Activities: [Activity]
  }

  type Role {
    roleID: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type Preference {
    preferenceID: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type Activity {
    activityID: ID
    name: String
    user_has_activity: User_has_activity
    createdAt: String
    updatedAt: String
  }


  type Status {
    statusID: ID
    statusCode: String
    createdAt: String
    updatedAt: String
  }

  type User_has_activity {
    userValue: Int
    activityID: ID
    uid: ID
    createdAt: String
    updatedAt: String
  }

  input ArrActivities {
    name: String
    userValue: Int
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

  type PreferenceResponse implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String
    preference: Preference
  }

  type ActivityResponse implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String
    activity: Activity
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

    #preference
    createPreference(name: String!): PreferenceResponse

    #activity
    createActivity(name: String!): ActivityResponse

    #user has preference
    addPreferenceToUser(arrPreferences: [String]): PreferenceResponse
    deletePreferenceToUser: PreferenceResponse

    #user has preference
    addActivityToUser(arrActivities: [ArrActivities]): ActivityResponse
    deleteActivityToUser: ActivityResponse

    # auht
    loginWhitEmailAndPassword(email: String!, password: String!): UserResponse
    loginWhitToken(token: String!): UserResponse
  }
`
module.exports = typeDefs
