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
    School: School
    Preferences: [Preference]
    Activities: [Activity]
    Careers: [Career]
  }

  type Role {
    roleID: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type School {
    schoolID: ID
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

  type Career {
    careerID: ID
    name: String
    user_has_career: User_has_career
    description: String
    matters: Int
    duration: Int
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

  type User_has_career {
    coincidenceValue: Float
    careerID: ID
    uid: ID
    createdAt: String
    updatedAt: String
  }

  input ArrActivities {
    name: String
    userValue: Int
  }

  input ArrUserData {
    name: String
    value: Int
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

  type SchoolResponse implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String
    school: School
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

  type CareerResponse implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String
    career: Career
  }

  # QUERY
  type Query {
    # user
    getUsers: [User]
    getUserById(uid: ID!): UserResponse

    # user
    getCareers: [Career]
    getCareerById(id: ID!): CareerResponse

    # role
    getRoles: [Role]

    # school
    getSchools: [School]
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

    #career
    createCareer(name: String!, description: String): CareerResponse

    #school
    createSchool(name: String!): SchoolResponse

    #user has preference
    addPreferenceToUser(arrPreferences: [String]): PreferenceResponse
    deletePreferenceToUser: PreferenceResponse

    #user has activities
    addActivityToUser(arrActivities: [ArrActivities]): ActivityResponse
    deleteActivityToUser: ActivityResponse

    #user has career
    addCareerToUser(data: [ArrUserData]): CareerResponse
    deleteCareerToUser: CareerResponse

    # auht
    loginWhitEmailAndPassword(email: String!, password: String!): UserResponse
    loginWhitToken(token: String!): UserResponse
  }
`
module.exports = typeDefs
