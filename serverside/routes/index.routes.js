const express = require("express");
const router = express.Router();
const controller = require("../controllers/file.controller");

let routes = (app) => {
  router.post("/api/upload/:userId", controller.upload);

  // router.post("/api/findOne", controller.findOne);
  router.post("/api/createData", controller.createData);
  router.get("/api/findData", controller.findData);
  router.get("/api/user", controller.getUser);
  router.get("/api/files", controller.getListFiles);
  router.get("/api/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;
