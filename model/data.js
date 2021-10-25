const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.models.data || mongoose.model("data", dataSchema);
