const {
  roleMutations,
  schoolMutations,
  userMutations,
  authMutations,
  statusMutations,
  preferenceMutations,
  activityMutations,
  userHasPreferenceMutations,
  userHasActivityMutations,
  careerMutations,
  userHasCareerMutations
} = require('./mutations')
const {
  userQuerys,
  roleQuerys,
  careerQuerys,
  schoolQuerys,
  analityQuerys
} = require('./querys')

const resolvers = {
  Query: {
    // user
    getUsers: (_, __, context) => userQuerys.getUsers(context),
    getUserById: (_, args) => userQuerys.getUserById(args),

    // career
    getCareers: (_, __, context) => careerQuerys.getCareers(context),
    getCareerById: (_, args) => careerQuerys.getCareerById(args),

    // role
    getRoles: (_, __, context) => roleQuerys.getRoles(context),
    // school
    getSchools: (_, __, context) => schoolQuerys.getSchools(context),
    getSuccessfulPreferences: (_, __, context) =>
      analityQuerys.getSuccessfulPreferences(context),
    getSuccessfulPreferencesForFaculties: (_, __, context) =>
      analityQuerys.getSuccessfulPreferencesForFaculties(context),
    getMostFrequentCareers: (_, __, context) =>
      analityQuerys.getMostFrequentCareers(context),
    getMostFrequentFaculties: (_, __, context) =>
      analityQuerys.getMostFrequentFaculties(context)
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

    // school
    createSchool: (_, args, context) =>
      schoolMutations.createSchool(args, context),

    // status
    createStatus: (_, args, context) =>
      statusMutations.createStatus(args, context),

    // preference
    createPreference: (_, args) => preferenceMutations.createPreference(args),

    // activity
    createActivity: (_, args) => activityMutations.createActivity(args),

    // activity
    createCareer: (_, args) => careerMutations.createCareer(args),

    // user has preference
    addPreferenceToUser: (_, args, context) =>
      userHasPreferenceMutations.addPreferenceToUser(args, context),
    deletePreferenceToUser: (_, __, context) =>
      userHasPreferenceMutations.deletePreferenceToUser(context),

    // user has activity
    addActivityToUser: (_, args, context) =>
      userHasActivityMutations.addActivityToUser(args, context),
    deleteActivityToUser: (_, __, context) =>
      userHasActivityMutations.deleteActivityToUser(context),

    // user has career
    addCareerToUser: (_, args, context) =>
      userHasCareerMutations.addCareerToUser(args, context),
    deleteCareerToUser: (_, __, context) =>
      userHasCareerMutations.deleteCareerToUser(context),

    // auth
    loginWhitEmailAndPassword: (_, args) =>
      authMutations.loginWhitEmailAndPassword(args),
    loginWhitToken: (_, args) => authMutations.loginWhitToken(args)
  }
}

module.exports = resolvers
