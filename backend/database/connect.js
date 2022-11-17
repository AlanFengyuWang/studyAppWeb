// const { MongoClient } = require("mongodb");

// const url = process.env.ATLAS_URL;
// const client = new MongoClient(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var dbConnection;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       console.log("Trying to connect");
//       if (db) {
//         dbConnection = db.db("studyApp");
//         console.log("Successfully connected to MongoDB.");
//       }
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     console.log("->dbConnection = " + dbConnection);
//     return dbConnection;
//   },
// };

import { DB_HOST, DB_PORT, DB_DATABASE } from "../databas";

export const dbConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
