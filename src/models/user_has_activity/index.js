const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const userHasActivity = dbconfig.define(
  'user_has_activity',
  {
    userValue: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'user_has_activity'
  }
)
module.exports = userHasActivity
