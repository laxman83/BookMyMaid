const uploadFile = require("../middleware/upload");

const db = require("../models");
const fs = require("fs");
const Maid = db.maids;
const op = db.Sequelize.Op;
const path = require("path");
const upload = async (req, res) => {
  try {
    req.fileName = `${new Date().getTime()}`;
    req.fileDestination = `./../client/public/photo`;
    await uploadFile(req, res);
    const directoryPath = `${req.fileDestination}/${req.fileName}-${req.originalname}`;
    await Maid.update(
      {
        imgUrl: directoryPath,
      },
      { where: { id: req.params.userId } }
    );
    const updatedMaid = await Maid.findOne({
      where: { id: req.params.userId },
    });

    res.status(200).send({
      message: "Upload file successfully",
      updatedMaid,
    });
  } catch (err) {
    res.status(404).send({
      message: `Could not upload the file ${err}`,
    });
  }
};

const createData = (req, res) => {
  //Create contact Us
  const MaidData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    address: req.body.address,
    dob: req.body.dob,
    gender: req.body.gender,
    work: req.body.work,
    phone: req.body.phone,
    uid: req.body.uid,
    imgUrl: "",
  };

  //Save data in contact us database
  console.log("users data is ", MaidData);
  if (!MaidData.firstname == "" && !MaidData.lastname == "")
    Maid.create(MaidData)
      .then((data) => {
        console.log(data);
        // res.send(data);
        res.status(200).send({ message: "Form successfully submitted", data });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the contact us data.",
        });
      });
};
const findData = (req, res) => {
  // const email = req.query.email;
  // let condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  Maid.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
};

const getUser = (req, res) => {
  try {
    console.log("inside findOne", req.query.id);

    Maid.findOne({
      where: {
        id: req.query.id,
      },
    })
      .then((maid) => {
        res.status(200).send(maid);
      })
      .catch((err) => {
        res.status(500).send({ message: "Something is missing" });
      });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file${err}`,
    });
  }
};
const getListFiles = (req, res) => {
  const directoryPath = `./../client/public/photo/`;

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: directoryPath + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = `./../client/public/photo/`;

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  findData,
  createData,
  getUser,
  getListFiles,
  download,
};
