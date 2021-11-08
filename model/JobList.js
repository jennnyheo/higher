import mongoose from "mongoose";

const jobListSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    introduction: { type: String, required: true },
    category: { type: Array },
    tags: { type: Array },
    experiment: { type: Number, required: true },
    address: { type: String },
    createdAt: { type: Date, required: true, default: Date.now },
    expire: { type: Date },
  },
  {
    timestamps: true,
  },
  { collection: "jobList" }
);

const JobList =
  mongoose.models.JobList || mongoose.model("JobList", jobListSchema);

export default JobList;
