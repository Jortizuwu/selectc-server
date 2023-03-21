const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const activity = dbconfig.define(
  'Activity',
  {
    activityID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'activity',
  }
)
module.exports = activity
