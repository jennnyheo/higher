import { MongoClient } from "mongodb";
import mongoose from "mongoose";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DBNAME;

let cachedClient = null;
let cachedDb = null;

const connection = {};

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

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  const client = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("new connection");
  connection.isConnected = client.connections[0].readyState;
  // const dbConnect = await client.db(dbName);

  // cachedClient = client;
  // cachedDb = dbConnect;

  // return { client, dbConnect };
}

async function disconnectToDatabase() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}
const db = { connectToDatabase, disconnectToDatabase, convertDocToObj };
export default db;
