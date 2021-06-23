const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const ContactUs = sequelize.define("contactus", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    subject: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.STRING,
    },
  });
  return ContactUs;
};
