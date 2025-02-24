const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoomAdSchema = new Schema({}, { strict: false });

module.exports = mongoose.model("BoomAd", BoomAdSchema);
