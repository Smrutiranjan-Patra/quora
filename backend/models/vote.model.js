const mongoose = require ('mongoose');

const VoteSchema = new mongoose.Schema (
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true},
    upVote: {type: Number, required: false},
    downVote: {type: Number, requied: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model ('vote', VoteSchema);
