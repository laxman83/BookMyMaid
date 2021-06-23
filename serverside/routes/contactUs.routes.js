module.exports = (app) => {
  const contactus = require("../controllers/contactUs.controller.js");
  let router = require("express").Router();
  // create a new contactUs
  router.post("/", contactus.create);

  //Retrieve all Tutorial

  // router.get("/", contactus.findAll);

  app.use("/api/contactus", router);
};
