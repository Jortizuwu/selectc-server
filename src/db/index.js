const fs = require('fs')
const { Sequelize } = require('sequelize')

const dbconfig = new Sequelize(
  process.env.DB_NAME,
  process.env.BD_USER,
  process.env.DB_PASSWORD,
  {
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    dialect: 'mysql',

    dialectOptions:
      process.env.NODE_ENV === 'prod'
        ? {
            ssl: { ca: fs.readFileSync('src/db/DigiCertGlobalRootCA.crt.pem') }
          }
        : undefined,
    ssl: process.env.NODE_ENV === 'prod' ? true : false
  }
)

const connection = async () => {
  try {
    await dbconfig.authenticate()
    await dbconfig.sync({ alter: true })
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = { connection, dbconfig }
