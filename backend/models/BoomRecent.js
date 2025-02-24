const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoomRecentSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    strict: true,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("BoomRecent", BoomRecentSchema);
