const {Schema, model} = require ('mongoose');

const UserSchema = new Schema (
  {
    name: {type: String, required: false},
    email: {type: String, required: true},
    description: {type: String, required: false},
    profile_pic: {type: String, required: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model ('user', UserSchema);
