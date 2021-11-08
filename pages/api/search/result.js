import { connectToDatabase } from "../../../lib/databaseConnection";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const jobs = await db.collection("jobList").find({}).toArray();
  res.json(jobs);
}
