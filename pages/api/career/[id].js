import nc from "next-connect";
import db from "../../../lib/databaseConnection";
import Career from "../../../model/JobList";

const handler = nc();

handler.get(async (req, res) => {
  await db.connectToDatabase();
  const joblist = await Career.findById(req.query.id);
  await db.disconnectToDatabase();

  res.send(joblist);
});

export default handler;
