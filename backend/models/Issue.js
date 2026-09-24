const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  problem: {
    type: String,
    required: true,
  },

  solution: {
    type: String,
    required: true,
  },

  technology: {
    type: String,
    required: true,
  },

  solved: {
    type: Boolean,
    default: true,
  },

  occurrences: {
    type: Number,
    default: 1,
  },
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;