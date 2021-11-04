import { MongoClient } from "mongodb";
// import { mongoose } from "mongoose";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DBNAME;

let cachedClient = null;
let cachedDb = null;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
    console.log(uri)
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbConnect = await client.db(dbName);

  cachedClient = client;
  cachedDb = dbConnect;

  return { client, dbConnect };
}

// export async function disconnectionToDatabase() {
//   if (connection.isConnected) {
//     if (process.env.NODE_ENV === "production") {
//       await mongoose.disconnect();
//       connection.isConnected = false;
//     } else {
//       console.log("not disconnected");
//     }
//   }
// }

export async function close() {
  if (cachedClient && cachedDb) {
    await MongoClient.close();
  }
}
