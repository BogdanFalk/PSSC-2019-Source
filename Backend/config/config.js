const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  port: process.env.PORT || 5000,
  db: {
    database: process.env.DB_NAME || 'heroku_0523a41d0d3135b',
    user: process.env.DB_USER || 'b9a12fcaf81717',
    password: process.env.DB_PASS || 'c3e8ab70',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'eu-cdbr-west-02.cleardb.net',
      port: process.env.DB_PORT || '3306'
    }
  }
}
