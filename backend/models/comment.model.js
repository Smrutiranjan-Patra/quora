const mongoose = require ('mongoose');

const CommentSchema = new mongoose.Schema (
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true},
    body: {type: String, required: true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model ('comment', CommentSchema);
