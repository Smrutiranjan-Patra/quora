const express = require ('express');
const jwt = require ('jsonwebtoken');

const newToken = user => {
  return jwt.sign ({user: user}, 'masaischool');
};

const authenticate = require ('../middlewares/authenticate');

const User = require ('../models/user.model');

const router = express.Router ();

router.get ('', async (req, res) => {
  console.log ('reached');
  const user = await User.find ({});
  return res.status (201).json (user);
});

// creating a user
router.post ('', async (req, res) => {
  const user = await User.create (req.body);
  const token = newToken (user);
  // we will store this token into redux store
  return res.status (201).json ({token: token});
});

// get user and token from email
router.get ('/profile/:email', async (req, res) => {
  const user = await User.find ({email: req.params.email}).exec ();
  // console.log("user:", user)
  const token = newToken (user[0]);
  return res.status (200).json ({user: user[0], token});
});
module.exports = router;
