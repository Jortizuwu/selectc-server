const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const career = dbconfig.define(
  'Career',
  {
    careerID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    matters: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: 'career',
  }
)
module.exports = career
