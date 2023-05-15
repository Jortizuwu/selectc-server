const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const User = dbconfig.define(
  'User',
  {
    uid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    preferenceCareer: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'user'
  }
)
module.exports = User
