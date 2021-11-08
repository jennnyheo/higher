import nc from "next-connect";
import db from "../../../lib/databaseConnection";
import JobList from "../../../model/JobList";

const handler = nc();

export default handler.get(async (req, res) => {
  await db.connectToDatabase();
  const jobLists = await JobList.find({});
  res.send(jobLists);
  await db.disconnectToDatabase();
});
