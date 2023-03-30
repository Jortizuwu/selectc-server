const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const school = dbconfig.define(
  'School',
  {
    schoolID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'school',
  }
)
module.exports = school
