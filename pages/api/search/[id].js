import { connectToDatabase } from "../../../lib/databaseConnection";

export default async function handler(req, res) {
  const { id } = req.query;
  const { db } = await connectToDatabase();
  const jobs = await db
    .collection("jobList")
    .find({ _id: parseInt(id) })
    .toArray();
  console.log(id);
  res.json(jobs);
}
