const db = require("../models");
const Feedback = db.feedback;

const feedback = (req, res) => {
  const feedback = {
    name: req.body.name,
    phoneNo: req.body.phoneNo,
    email: req.body.email,
    feedback: req.body.feedback,
  };
  console.log("inside feedback", feedback);

  const test = Feedback.create(feedback)
    .then((data) => {
      console.log("inside feedback create method", data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the feedback data.",
      });
    });
  console.log("inside test ", test);
};

module.exports = { feedback };
