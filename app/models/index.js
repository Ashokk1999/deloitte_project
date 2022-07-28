const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.server,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
 // operatorsAliases: false,

 /* pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }*/
});

const db = {
  Sequelize : Sequelize,
  sequelize : sequelize,
  connectDb: async function() {
    await sequelize.authenticate();
  }
};


db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
