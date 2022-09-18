const bcrypt = require("bcryptjs");
const Users = require("../models/User");
const saltRounds = 12;
const salt = bcrypt.genSaltSync(saltRounds);
const controller = require("../controllers/auth.controller");

module.exports = function createUserOnStartUp() {
  User.create({
    email: "admin@gmail.com",
    username: "admin123",
    password: bcrypt.hashSync("admin@1234", salt),
  })
    .then((user) => {
      // user role = 1
      user.setRoles([2]).then(() => {
        console.log("User created successfully");
      });
    })
    .catch((err) => {
      res.send({
        status: 500,
        message: err.message,
      });
    });
};
