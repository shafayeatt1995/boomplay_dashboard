const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AudiomackAdSchema = new Schema({}, { strict: false });

module.exports = mongoose.model("AudiomackAd", AudiomackAdSchema);
