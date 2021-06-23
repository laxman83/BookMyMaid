const db = require("../models");
const fs = require("fs");
const maidBook = db.maidBook;
const op = db.Sequelize.Op;
const path = require("path");

const maidBookData = (req, res) => {
  try {
    bookData = {
      name: req.body.name,
      email: req.body.email,
      mono: req.body.mono,
      address: req.body.address,
      session: req.body.session,
      date: req.body.date,
    };
    console.log("inside book data ", bookData);
    maidBook.create(bookData).then((data) => {
      console.log(data);
      res.status(200).send(data);
    });
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
};

module.exports = { maidBookData };
