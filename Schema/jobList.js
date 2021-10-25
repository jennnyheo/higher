const mongoose = require("mongoose");

const jobListSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
});

const jobList =
  mongoose.models.jobList || mongoose.model("jobList", jobListSchema);
export default jobList;
