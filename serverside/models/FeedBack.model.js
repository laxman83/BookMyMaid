module.exports = (sequelize, Sequelize) => {
  const feedback = sequelize.define("feedback", {
    name: {
      type: Sequelize.STRING,
    },
    phoneNo: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    feedback: {
      type: Sequelize.STRING,
    },
  });
  return feedback;
};
