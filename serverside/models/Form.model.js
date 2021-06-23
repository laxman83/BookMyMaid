module.exports = (sequelize, Sequelize) => {
  const UserApplication = sequelize.define("maids", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.DATE,
    },
    gender: {
      type: Sequelize.STRING,
    },
    work: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    uid: {
      type: Sequelize.STRING,
    },
    imgUrl: {
      type: Sequelize.STRING,
    },
  });

  return UserApplication;
};
