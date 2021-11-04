import nextConnect from "next-connect";
import { connectToDatabase } from "../../../lib/databaseConnection";
import bcrypt from "bcryptjs";
import { signToken } from "../../../lib/auth";

const handler = nextConnect();
handler.post(async (req, res) => {
  const { db } = await connectToDatabase();
  const user = await db.collection("User").findOne({ email: req.body.email });
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
