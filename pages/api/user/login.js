import nextConnect from "next-connect";
import db from "../../../lib/databaseConnection";
import bcrypt from "bcryptjs";
import { signToken } from "../../../lib/auth";
import User from "../../../model/User";

const handler = nextConnect();
handler.post(async (req, res) => {
  await db.connectToDatabase();
  const user = await User.findOne({ email: req.body.email });
  await db.disconnectToDatabase();
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      password: user.password,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).send({ message: "Invalid" });
  }
});

export default handler;
