const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const preference = dbconfig.define(
  'Preference',
  {
    preferenceID: {
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
    tableName: 'preference',
  }
)
module.exports = preference
