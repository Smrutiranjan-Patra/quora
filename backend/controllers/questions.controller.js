const express = require ('express');
console.log ('runnig');
const router = express.Router ();

const Question = require ('../models/question.model');

router.post ('/', async (req, res) => {
  try {
    const question = await Question.create (req.body);

    return res.status (201).send (question);
  } catch (e) {
    return res.status (501).json ({message: e.message, status: 'Failed'});
  }
});

router.get ('/', async (req, res) => {
  try {
    const questions = await Question.find ({});

    return res.status (201).json (questions);
  } catch (e) {
    return res.status (500).json ({message: e.message, status: 'Failed'});
  }
});

module.exports = router;
