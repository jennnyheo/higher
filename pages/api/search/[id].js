import nc from "next-connect";
import db from "../../../lib/databaseConnection";
import JobList from "../../../model/JobList";

const handler = nc();

handler.get(async (req, res) => {
  await db.connectToDatabase();
  const joblist = await JobList.findById(req.query.id);
  await db.disconnectToDatabase();

  res.send(joblist);
});

export default handler;
