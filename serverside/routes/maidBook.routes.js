const express = require("express");
const router = express.Router();
const maidController = require("../controllers/maidBook.controller");

let routes = (app) => {
  router.post("/api/maidBook", maidController.maidBookData);
  app.use(router);
};

module.exports = routes;
