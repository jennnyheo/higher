import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    filter: { type: Array },
    img: { type: String, required: true },
    startAt: { type: Date, required: true, default: Date.now },
    endAt: { type: Date },
    tags: { type: Array },
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  },
  { collection: "Career" }
);

const Career = mongoose.models.Career || mongoose.model("Career", careerSchema);

export default Career;
