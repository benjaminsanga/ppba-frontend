const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelizeConfig = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelizeConfig = sequelizeConfig;
db.user = require("./user.model.js")(sequelizeConfig, Sequelize);
db.report = require("./report.model.js")(sequelizeConfig, Sequelize);
db.activity = require("./activity.model.js")(sequelizeConfig, Sequelize);
db.notification = require("./notications.model.js")(sequelizeConfig, Sequelize);
module.exports = db;