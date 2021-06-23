module.exports = (sequelize, Sequelize) => {
  const MaidBook = sequelize.define("maidBook", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    mono: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
    session: {
      type: Sequelize.STRING,
    },
  });
  return MaidBook;
};
