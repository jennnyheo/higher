import nc from "next-connect";
import db from "../../lib/databaseConnection";
import Career from "../../model/career";
import data from "../../model/data";
import JobList from "../../model/JobList";
import User from "../../model/User";

const handler = nc();

export default handler.get(async (req, res) => {
  await db.connectToDatabase();
  // const userInfos = data.users;
  const careerInfos = data.career;
  const jonListInfos = data.jobList;
  // User.deleteMany();
  // User.insertMany(userInfos);
  Career.deleteMany(careerInfos);
  Career.insertMany(careerInfos);
  JobList.deleteMany(jonListInfos);
  JobList.insertMany(jonListInfos);
  await db.disconnectToDatabase();
  res.send({ message: "seed has been made successfully" });
});
