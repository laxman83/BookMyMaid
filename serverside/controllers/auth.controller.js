const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const Op = db.Sequelize.Op;

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// sign up

exports.signup = (req, res) => {
  const myPlaintextPassword = req.body.password;
  console.log("inside plain text password", myPlaintextPassword);
  const salt = bcrypt.genSaltSync(saltRounds);
  console.log("inside salt ", salt);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  console.log("inside hash", hash);
  // Save User to Database
  console.log("Inside sign up ", req.body);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  console.log("Inside sign in ", req.body);
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push(roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
