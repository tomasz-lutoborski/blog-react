const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  username: String,
  date: Date,
  numOfLikes: Number,
  numOfComments: Number,
  comment: String,
});

module.exports = mongoose.model('Post', postSchema);
