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

//get all tasks given by user email
recordRoutes.route("/task/email/:email").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { email: req.params.email };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//insert tasks
//input needs to include user email
recordRoutes.route("/task/add").post(function (req, res) {
  let db_connect = dbo.getDb();
  const taskObj = {
    _id: new ObjectId(),
    taskTitle: req.body.taskTitle,
    taskDescription: req.body.taskDescription,
    type: req.body.type,
    due: req.body.due,
    milestones: req.body.milestones,
    subtasks: req.body.subtask,
  };

  //add array elements using push
  db_connect.collection("users").updateOne(
    { email: req.body.email },
    {
      $push: { tasks: taskObj },
    },
    function (err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
});

module.exports = recordRoutes;
