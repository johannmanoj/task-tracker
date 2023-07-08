const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');

const sequelize = new Sequelize(dbConfig.db.DATABASE, dbConfig.db.USER, dbConfig.db.PASSWORD, {
    host: dbConfig.db.HOST,
    dialect: dbConfig.db.DIALECT,
});

const db = {};
db.sequelize = sequelize;
db.models = {};


module.exports = {db};