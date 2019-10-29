const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Filial = require('../models/Filial');

const connection = new Sequelize (dbConfig);

Filial.init(connection);

module.exports = connection;