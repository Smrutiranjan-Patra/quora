const User = require ('../models/user.model');
const {v4: uuid_v4} = require ('uuid');
var jwt = require ('jsonwebtoken');
const newToken = user => {
  return jwt.sign ({user: user}, process.env.JWT_ACCESS_KEY); //sec part is key
};
const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth2').Strategy;

passport.use (
  new GoogleStrategy (
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:2333/auth/google/callback',
      userProfileURL: 'https://**www**.googleapis.com/oauth2/v3/userinfo',
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      // console.log (profile, 'profile');
      let user = await User.findOne ({email: profile._json.email})
        .lean ()
        .exec ();

      if (!user) {
        user = await User.create ({
          email: profile._json.email,
          password: uuid_v4 (),
          name: profile.displayName,
          profile_pic: profile.picture,
        });
      }
      const token = newToken (user);
      console.log (token);
      return done (null, {user, token});
    }
  )
);

module.exports = passport;
