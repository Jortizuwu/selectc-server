const userModel = require('./user')
const roleModel = require('./role')
const statusModel = require('./status')
const preferenceModel = require('./preference')
const activityModel = require('./activity')
const careerModel = require('./career')
const userHasPreferenceModel = require('./user_has_preference')
const userHasCareerModel = require('./user_has_career')
const userHasActivityModel = require('./user_has_activity')

// role user
roleModel.hasMany(userModel, {
  foreignKey: {
    name: 'roleID'
  }
})
userModel.belongsTo(roleModel, {
  foreignKey: {
    name: 'roleID'
  }
})

// status user
statusModel.hasMany(userModel, {
  foreignKey: {
    name: 'statusID'
  }
})
userModel.belongsTo(statusModel, {
  foreignKey: {
    name: 'statusID'
  }
})

// user has preferences
userModel.belongsToMany(preferenceModel, {
  through: 'user_has_preference',
  foreignKey: {
    name: 'uid'
  }
})
preferenceModel.belongsToMany(userModel, {
  through: 'user_has_preference',
  foreignKey: {
    name: 'preferenceID'
  }
})

// user has activity
userModel.belongsToMany(activityModel, {
  through: userHasActivityModel,
  foreignKey: {
    name: 'uid'
  }
})
activityModel.belongsToMany(userModel, {
  through: userHasActivityModel,
  foreignKey: {
    name: 'activityID'
  }
})

// user has career
userModel.belongsToMany(careerModel, {
  through: userHasCareerModel,
  foreignKey: {
    name: 'uid'
  }
})
careerModel.belongsToMany(userModel, {
  through: userHasCareerModel,
  foreignKey: {
    name: 'careerID'
  }
})

module.exports = {
  userModel,
  roleModel,
  statusModel,
  preferenceModel,
  activityModel,
  careerModel,
  userHasPreferenceModel,
  userHasActivityModel,
  userHasCareerModel
}
