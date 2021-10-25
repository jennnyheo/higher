import dbConnect from "../../util/databaseConnection";
import { sampleData } from "../../model/data";

dbConnect();

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        res.status(200).json({ success: true, name: "sample" });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
  }
};

export default handler;
