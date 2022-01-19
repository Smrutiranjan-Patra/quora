const mongoose = require ('mongoose');

const PostSchema = new mongoose.Schema (
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    body: {type: String, required: false},
    pic: {type: String, required: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model ('post', PostSchema);
