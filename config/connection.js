require('dotenv').config();

const Sequelize = require('sequelize');

//condition true ? do this : otherwise do this
  const sequelize = new Sequelize('ecommerce_db', 'root', 'Mysqlpass', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

 module.exports = sequelize;
