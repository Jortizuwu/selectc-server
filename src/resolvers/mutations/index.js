const roleMutations = require('./role')
const userMutations = require('./user')
const authMutations = require('./auth')
const statusMutations = require('./status')
const preferenceMutations = require('./preference')
const activityMutations = require('./activity')
const userHasPreferenceMutations = require('./user_has_preference')
const userHasActivityMutations = require('./user_has_activity')

module.exports = {
  roleMutations,
  userMutations,
  authMutations,
  statusMutations,
  preferenceMutations,
  activityMutations,
  userHasPreferenceMutations,
  userHasActivityMutations
}
