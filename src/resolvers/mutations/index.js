const roleMutations = require('./role')
const userMutations = require('./user')
const authMutations = require('./auth')
const statusMutations = require('./status')
const preferenceMutations = require('./preference')
const activityMutations = require('./activity')
const careerMutations = require('./career')
const userHasPreferenceMutations = require('./user_has_preference')
const userHasActivityMutations = require('./user_has_activity')
const userHasCareerMutations = require('./user_has_career')

module.exports = {
  roleMutations,
  userMutations,
  authMutations,
  statusMutations,
  preferenceMutations,
  activityMutations,
  careerMutations,
  userHasPreferenceMutations,
  userHasActivityMutations,
  userHasCareerMutations,
}
