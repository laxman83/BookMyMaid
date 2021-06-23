const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.contactus = require("../models/ContactUs.model.js")(sequelize, Sequelize);
db.maids = require("../models/Form.model.js")(sequelize, Sequelize);
db.maidBook = require("../models/MaidBook.model.js")(sequelize, Sequelize);
db.feedback = require("../models/FeedBack.model.js")(sequelize, Sequelize);
console.log("Inside feedback");
console.log(db.feedback);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.maidBook.belongsToMany(db.maids, {
  through: "bookMaid",
  foreignKey: "maidsBookId",
  otherKey: "maidId",
});
db.maids.belongsToMany(db.maidBook, {
  through: "bookMaid",
  foreignKey: "maidsId",
  otherKey: "maidsBookId",
});
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
