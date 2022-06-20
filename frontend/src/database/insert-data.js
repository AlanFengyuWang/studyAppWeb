const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url = process.env.DATABASE_URL;
const client = new MongoClient(url);

// The database to use
const dbName = "studyApp";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("users");

    // Construct a document
    let personDocument = {
      name: { first: "Fengyu", last: "Wang" },
      accountTimeCreated: new Date(2022, 6, 16),
      email: "wfy1361202895@gmail.com",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJxUDzkNkkuG1y0lqH7s7xI0EcwMqkUOtvogGtkW=s96-c",
      lastTimeRevised: new Date(2022, 6, 16, 20, 45),
      task: [
        {
          taskName: "Finishing chemistry week 2 lecture",
          description: "I need to work harder",
          type: "Work",
          due: new Date(2022, 6, 19, 16),
          percentageRemained: 30,
          subtasks: [
            {
              subTaskName: "finishing 2A",
              description: "it will be hard",
              due: new Date(2022, 6, 17, 14, 30),
            },
          ],
        },
      ],
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(personDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
