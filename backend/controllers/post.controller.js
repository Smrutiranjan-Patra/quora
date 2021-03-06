const express = require ('express');

const router = express.Router ();

const Post = require ('../models/post.model');

router.post ('/', async (req, res) => {
  try {
    const post = await Post.create (req.body);

    return res.status (201).send (post);
  } catch (e) {
    return res.status (501).json ({message: e.message, status: 'Failed'});
  }
});

router.get ('/', async (req, res) => {
  try {
    const post = await Post.find ({});

    return res.status (201).json (post);
  } catch (e) {
    return res.status (500).json ({message: e.message, status: 'Failed'});
  }
});

module.exports = router;
