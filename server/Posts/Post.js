const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  title: String,
  genre: { type: Schema.Types.ObjectId, ref: "genre" },
  description: String,
  image: String,
  author: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("post", PostSchema);