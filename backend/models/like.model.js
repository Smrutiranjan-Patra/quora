const mongoose = require ('mongoose');

const likeSchema = new mongoose.Schema (
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model ('like', likeSchema);
