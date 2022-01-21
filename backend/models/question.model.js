const {Schema, model} = require ('mongoose');

const QuestionSchema = Schema (
  {
    questionName: {type: String, required: true},
    createdAt: {
      type: Date,
      default: Date.now (),
    },
    images: [{type: String, required: false}],
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    answerIds: [{type: Schema.Types.ObjectId}],
  },
  {
    timeStamps: true,
    versionKey: false,
  }
);

module.exports = model ('question', QuestionSchema);
