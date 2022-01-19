const {Schema, model} = require ('mongoose');

const QuestionSchema = Schema (
  {
    questionName: {type: String, required: true},
    createdAt: {
      type: Date,
      default: Date.now (),
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: 'true',
    },
  },
  {
    timeStamps: true,
    versionKey: false,
  }
);

module.exports = model ('question', QuestionSchema);
