
const Sequelize = require('sequelize');
module.exports = {
  name: Sequelize.STRING(100),
  password: Sequelize.STRING(30)
}