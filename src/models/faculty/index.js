const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const Faculty = dbconfig.define(
  'Faculty',
  {
    facultyID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  },
  {
    tableName: 'faculty'
  }
)
module.exports = Faculty
