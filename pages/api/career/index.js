import nc from "next-connect";
import db from "../../../lib/databaseConnection";
import Career from "../../../model/Career";

const handler = nc();

export default handler.get(async (req, res) => {
  await db.connectToDatabase();
  const careerInfo = await Career.find({});
  res.send(careerInfo);
  await db.disconnectToDatabase();
});
