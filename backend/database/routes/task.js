const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../connect");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

//get all tasks given by user id
recordRoutes.route("/task/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//insert tasks
//input needs to include user id
recordRoutes.route("/task/add").post(function (req, res) {
  let db_connect = dbo.getDb();
  const taskObj = {
    _id: "UNIQUE COUNT DOCUMENT IDENTIFIER",
    taskTitle: req.body.taskTitle,
    taskDescription: req.body.taskDescription,
    type: req.body.type,
    due: req.body.due,
    subtask: req.body.subtask,
  };

  //add array elements using push
  db_connect.collection("users").updateOne(
    { _id: req.body.userId },
    {
      $push: taskObj,
    }
  );
});

module.exports = recordRoutes;
