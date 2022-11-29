const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const userHasPreference = dbconfig.define(
  'user_has_preference',
  {
    uid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    preferenceID: {
      type: DataTypes.UUID,
      allowNull: false
    }
  },
  {
    tableName: 'user_has_preference'
  }
)
module.exports = userHasPreference
