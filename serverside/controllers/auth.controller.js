const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const userRoles = db.userRoles;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const Op = db.Sequelize.Op;

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// sign up

exports.signup = (req, res) => {
  const myPlaintextPassword = req.body.password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
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
            res.send({
              status: 200,
               message: "User was registered successfully!" 
              });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ 
            status: 200,
            message: "User was registered successfully!"
           });
        });
      }
    })
    .catch((err) => {
      res.send({ 
        status: 500,
        message: err.message });
    });
};

exports.signin = (req, res) => {
  console.log("Inside sign in ", req.body);
 const user = User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
      console.log('called', req.body)
      if (!user) {
        console.log('called', req.body)
        return res.status(400).send({ 
          status: 400,
          message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(400).send({
          status: 400,
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        console.log('Roles called', roles)
      })
  
      user.getRoles().then((roles) => {
        console.log(`Roles: ${roles}`)
        for (let i = 0; i < roles.length; i++) {
          authorities.push(roles[i].name.toUpperCase());
        }
        res.send({
          status: 200,
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.send({ 
        status: 500,
        message: err.message
       });
    });
    console.log(user, 'user created')
};
