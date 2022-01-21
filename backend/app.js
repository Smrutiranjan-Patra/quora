const express = require ('express');
const {register, login} = require ('./controllers/auth.controller');
const {body} = require ('express-validator');
const cors = require ('cors');
const app = express ();
const User = require ('./models/user.model');
const passport = require ('./configs/passport');
app.use (express.json ());
app.use (cors ());
app.use (passport.initialize ());
//"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
app.use (express.json ());
// const productController = require ('./controllers/products.controller');

const userController = require ('./controllers/user.controller');

const questionController = require ('./controllers/questions.controller');
const postController = require ('./controllers/post.controller');

app.use ('/users', userController);
app.use ('/post', postController);
app.use ('/question', questionController);

app.post (
  '/signup',
  body ('email').custom (async value => {
    const isEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test (value);

    if (!isEmail) {
      throw new Error ('please Enter proper email');
    }

    return true;
  }),
  body ('password').custom (async value => {
    const isPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test (
      value
    );

    if (!isPassword) {
      throw new Error (
        'please Enter Minimum eight characters, at least one letter, one number and one special character:'
      );
    }

    return true;
  }),
  register
);
app.post ('/signin', login);

// app.use ('/products', productController);

//Google oAuth
app.get (
  '/auth/google',
  passport.authenticate ('google', {
    scope: ['email', 'profile'],
  })
);

app.get (
  '/auth/google/callback',
  passport.authenticate ('google', {
    failureRedirect: '/auth/google/failure',
  }),
  async function (req, res) {
    //authenticated the user
    // console.log ('res', req.user);
    const user = await User.find ({email: req.user.email});
    console.log (req.user);
    if (user.length > 0) {
      res.redirect (`http://localhost:3000/profile/${req.user.user.email}`);
    } else {
      res.redirect (`http://localhost:3000/createUser/${req.user.user.email}`);
    }

    // return res.status (201).json ({user: req.user.user, token: req.user.token});
  }
);

app.get ('/auth/google/failure', function (req, res) {
  return res.send ('Something went wrong');
});
passport.serializeUser (function ({user, token}, done) {
  done (null, {user, token});
});
passport.deserializeUser (function (user, done) {
  done (err, user);
});

module.exports = app;
