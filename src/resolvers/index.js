const {
  roleMutations,
  userMutations,
  authMutations,
  statusMutations
} = require('./mutations')
const { userQuerys, roleQuerys } = require('./querys')

const resolvers = {
  Query: {
    // user
    getUsers: (_, __, context) => userQuerys.getUsers(context),
    getUserById: (_, args) => userQuerys.getUserById(args),

    // role
    getRoles: (_, __, context) => roleQuerys.getRoles(context)
  },
  Mutation: {
    // user
    createUser: (_, args) => userMutations.createUser(args),
    updateUser: (_, args, context) => userMutations.updateUser(args, context),
    deleteUser: (_, args, context) => userMutations.deleteUser(args, context),
    disableOrActiveUser: (_, __, context) =>
      userMutations.disableOrActiveUser(context),

    // role
    createRole: (_, args, context) => roleMutations.createRole(args, context),

    // status
    createStatus: (_, args, context) =>
      statusMutations.createStatus(args, context),

    // auth
    loginWhitEmailAndPassword: (_, args) =>
      authMutations.loginWhitEmailAndPassword(args),
    loginWhitToken: (_, args) => authMutations.loginWhitToken(args)
  }
}

module.exports = resolvers
