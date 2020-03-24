
const Sequelize = require('sequelize');
module.exports = {
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  age: Sequelize.BIGINT
}