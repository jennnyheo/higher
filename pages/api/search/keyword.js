import nc from "next-connect";
import db from "../../../lib/databaseConnection";
import JobList from "../../../model/JobList";

const handler = nc();

handler.get(async (req, res) => {
  const { keyword } = req.query;
  const searchList = await JobList.find({
    position: keyword,
  });
  await db.disconnectToDatabase();

  res.send(searchList);
  console.log(keyword);
});

export default handler;
