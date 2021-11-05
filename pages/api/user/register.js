import nextConnect from "next-connect";
import { connectToDatabase } from "../../../lib/databaseConnection";
import bcrypt from "bcryptjs";
import { signToken } from "../../../lib/auth";
import User from "../../../model/User";

const handler = nextConnect();
handler.post(async (req, res) => {
  const { db } = await connectToDatabase();
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
  });
  // const user = await newUser.save();
  const user = await db.collection("User").save(newUser);
  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    password: user.password,
    isAdmin: user.isAdmin,
  });
});

export default handler;
