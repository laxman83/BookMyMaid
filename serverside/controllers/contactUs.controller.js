const db = require("../models");
const ContactUs = db.contactus;
const op = db.Sequelize.Op;

exports.create = (req, res) => {
  //Create contact Us
  const contactus = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  };

  //Save data in contact us database
  console.log("users data is ", contactus);
  ContactUs.create(contactus)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the contact us data.",
      });
    });
};
