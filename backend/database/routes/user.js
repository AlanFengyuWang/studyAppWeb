const express = require("express");
const { func } = require("prop-types");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../connect");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Get a list of all the users.
recordRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb();
  console.log("db_connect = " + db_connect);
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        throw err;
      }
      res.json(result);
    });
});

//get a single user given by id
recordRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//get user given by email
recordRoutes.route("/user/email/:email").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { email: req.params.email };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//insert user
recordRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let userobj = {
    name: { first: req.body.name.first, last: req.body.name.last },
    email: req.body.email,
    password: req.body.password, //Here we assume password is empty if it's third party, otherwise it's hashed password
    image: req.body.image,
    accountTimeCreated: req.body.accountTimeCreated,
    tasks: [],
  };
  db_connect.collection("users").insertOne(userobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//update
recordRoutes.route("/user/update").post(function (req, response) {
  let db_connect = dbo.getDb();
  let userobj = {
    name: { first: req.body.name.first, last: req.body.name.last },
    email: req.body.email,
    password: req.body.password, //Here we assume password is empty if it's third party, otherwise it's hashed password
    image: req.body.image,
    accountTimeCreated: req.body.accountTimeCreated,
    tasks: [],
  };
  db_connect
    .collection("users")
    .updateOne(
      { _id: ObjectId(req.body.userId) },
      { $set: userobj },
      function (err, res) {
        if (err) throw err;
        response.json(res);
      }
    );
});

module.exports = recordRoutes;
