const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url = process.env.DATABASE_URL;
const client = new MongoClient(url);

// The database to use
const dbName = "studyApp";

type Props = {
    name: {first: string, last: string},
    email: string,
    image?: string,
}

export async function registerUser(props: Props) {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("users");

    const {name, email, image} = props;

    let key = {email: email};

    let personDocument = {
        name: { first: name.first, last: name.last },
        accountTimeCreated: new Date(),
        image: image,
      };

    // Insert a single document, wait for promise so we can read it back
    // db.collection.updateOne({_id : { $ne : "xyz"}}, {$setOnInsert :{ field1 : "data" }},{upsert :true});
    const p = await col.update(key, personDocument, {upsert :true});
    // Find one documentx
    const myDoc = await col.findOne();
    console.log(myDoc);
  } catch (err:any) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
 
