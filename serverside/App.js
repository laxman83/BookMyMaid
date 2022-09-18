const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const upload = multer();
const app = express();
global.__basedir = __dirname;
let coreOption = {
  origin: "http://localhost:3000",
};

app.use(cors(coreOption));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array());
// app.use(express.static("public"));
const db = require("./models");
const Role = db.role;

// db.sequelize.sync().then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });

db.sequelize.sync();
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
//simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to book my maid app" });
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Book my maid application." });
});
require("./routes/auth.routes")(app);
require("./routes/index.routes")(app);
require("./routes/maidBook.routes")(app);
require("./routes/user.routes")(app);
require("./routes/contactUs.routes")(app);
require("./routes/feedback.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
