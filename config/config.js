const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
  
    // import mysql2 from 'mysql2';
    // if (options.dialect === 'mysql') {
    //   options.dialectModule = mysql2;
    // }
    // new Sequelize(options)

module.exports = sequelize;