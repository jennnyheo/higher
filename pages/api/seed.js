import nc from "next-connect";
import { connectToDatabase, close } from "../../lib/databaseConnection";
import data from "../../model/data";
import User from "../../model/User";

const handler = nc();

export default handler.get(async (req, res) => {
  await connectToDatabase();
  const userInfos = data.users;
  User.deleteMany();
  User.insertMany(userInfos);
  await close();
  res.send({ message: "seed has been made successfully" });
});
