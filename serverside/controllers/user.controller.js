// const { Users } = require("../models");
// const db = require("../models");
// const User = db.Users;
// const Op = db.Sequelize.Op;
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// // Create and Save a new User

// exports.create = (req, res) => {
//   if (!req.body.email) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//     return;
//   }
//   const myPlaintextPassword = req.body.password;
//   const salt = bcrypt.genSaltSync(saltRounds);
//   const hash = bcrypt.hashSync(myPlaintextPassword, salt);

//   // Create a User
//   const user = {
//     name: req.body.name,
//     email: req.body.email,
//     password: hash,
//   };

//   console.log("User is", user);
//   // Save User in the database
//   User.create(user)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while registering  the User.",
//       });
//     });
// };

// exports.findAll = (req, res) => {
//   const email = req.query.email;
//   let condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

//   Users.findAll({ where: condition })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred",
//       });
//     });
// };

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
