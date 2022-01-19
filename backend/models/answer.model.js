const {Schema, model} = require ('mongoose');

const AnswerSchema = new Schema (
  {
    answerName: {type: String, required: true},
    questionId: {
      type: Schema.Types.ObjectId,
      ref: 'question',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now (),
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model ('answer', AnswerSchema);
