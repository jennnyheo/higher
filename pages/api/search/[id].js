import db from "../../../lib/databaseConnection";
import JobList from "../../../model/JobList";

export default async function handler(req, res) {
  await db.connectToDatabase();
  const job = await JobList.findById(req.query.id);
  await db.disconnectToDatabase();
  res.send(job);
}
