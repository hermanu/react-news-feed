const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Feed = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    archived: {
      type: Boolean,
      required: true,
      default: false,
    },
    archivedDate: {
      type: Date,
      required: false,
    },
    // guid: {
    //   type: String,
    //   requied: true,
    // },
  },
  { timestamps: true }
);

// Feed.index({ guid: 1 }, { unique: true });

module.exports = mongoose.model("Feed", Feed);
