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
  // console.log("task id");
  let myquery = { _id: req.params.id };
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

//delete task given by id
recordRoutes.route("/task/delete/:id").post(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect.collection("users").updateOne(
    {
      email: req.body.email,
    },
    {
      $pull: {
        tasks: {
          _id: ObjectId(req.params.id),
        },
      },
    },
    function (err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
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
    scheduleTime: req.body.scheduleTime,
    // milestones: req.body.milestones,
    // subtasks: req.body.subtask,
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

//Example for the update task due
// recordRoutes.route("/user/update").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let userobj = {
//     name: { first: req.body.name.first, last: req.body.name.last },
//     email: req.body.email,
//     password: req.body.password, //Here we assume password is empty if it's third party, otherwise it's hashed password
//     image: req.body.image,
//     accountTimeCreated: req.body.accountTimeCreated,
//     tasks: [],
//   };
//   db_connect
//     .collection("users")
//     .updateOne(
//       { _id: ObjectId(req.body.userId) },
//       { $set: userobj },
//       function (err, res) {
//         if (err) throw err;
//         response.json(res);
//       }
//     );
// });

// update the task due
// recordRoutes.route("/task/:id/due").post(function (req, res) {
//   let db_connect = dbo.getDb();
//   // const taskObj = {
//   //   _id: new ObjectId(),
//   //   // taskTitle: req.body.taskTitle,
//   //   // taskDescription: req.body.taskDescription,
//   //   // type: req.body.type,
//   //   // due: req.body.due,
//   //   // scheduleTime: req.body.scheduleTime,
//   //   // milestones: req.body.milestones,
//   //   // subtasks: req.body.subtask,
//   // };

//   let taskId = { _id: req.params.id };
//   db_connect
//     .collection("users")
//     .updateOne(
//       { _id: ObjectId(req.body.userId) },
//       { $set: { "tasks.$[elem].due": req.body.due } },
//       { arrayFilter: [{ "ele._id": { $eq: taskId } }] }
//     );
// });

recordRoutes.route("/task/acquire").get(function (req, res) {
  let db_connect = dbo.getDb();
  // console.log("task acquire");
  // let taskId = req.params._id;
  // console.log("req.body.userId = " + req.body.userId);
  // let myquery = { _id: ObjectId(req.body.userId) };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = recordRoutes;
