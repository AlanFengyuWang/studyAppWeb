const { MongoClient } = require("mongodb");

const url = process.env.ATLAS_URL;
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      console.log("Trying to connect");
      if (db) {
        _db = db.db("studyApp");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
