const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AudioRecentSchema = new Schema(
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

module.exports = mongoose.model("AudioRecent", AudioRecentSchema);
