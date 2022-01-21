const {Schema, model} = require ('mongoose');

const UserSchema = new Schema (
  {
    name: {type: String, required: false},
    password: {type: String, required: false},
    email: {type: String, required: true},
    description: {type: String, required: false},
    profile_pic: {type: String, required: false},
    followers: [{type: Schema.Types.ObjectId, ref: 'user'}],
    following: [{type: Schema.Types.ObjectId, ref: 'user'}],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model ('user', UserSchema);
