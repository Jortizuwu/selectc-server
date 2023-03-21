const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const userHasCareer = dbconfig.define(
  'user_has_career',
  {
    coincidenceValue: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: 'user_has_career',
  }
)
module.exports = userHasCareer
