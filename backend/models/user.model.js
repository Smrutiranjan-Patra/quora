const {Schema, model} = require ('mongoose');

const UserSchema = new Schema (
  {
    name: {type: String, required: true},
    description: {type: String, required: true},
    profile_pic: {type: String, required: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model ('user', UserSchema);
