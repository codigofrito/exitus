const Sequelize = require('sequelize');
const config = require('../../../config/database');
const sequelize = new Sequelize(config);
const { queryInterface } = sequelize;

module.exports.Sequelize = Sequelize;
module.exports.queryInterface = queryInterface;