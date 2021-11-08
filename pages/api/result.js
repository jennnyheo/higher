import JobList from "../../model/JobList";
import nc from "next-connect";
import db from "../../lib/databaseConnection";
import Career from "../../model/career";
const handler = nc();

export default handler.get(async (req, res) => {
  //await db.connectToDatabase();
  // const dbConnection = await db.connectToDatabase();
  //   const jobs = await db
  //   .collection("jobList")
  //   .find({ _id: parseInt(id) })
  //   .toArray();
  // const jobLists = await dbConnection.collection("jobList").find({}).toArray();
  // await db.disconnectToDatabase();
  await db.connectToDatabase();
  const jobLists = await Career.find({});
  res.send(jobLists);
  await db.disconnectToDatabase();
});
