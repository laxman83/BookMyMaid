const express = require("express");
const router = express.Router();
const feedback = require("../controllers/feedback.controller");
let routes = (app) => {
  router.post("/api/feedback", feedback.feedback);
  app.use(router);
};
module.exports = routes;
