const jwt = require ('jsonwebtoken');

const verifyToken = token => {
  return new Promise ((resolve, reject) => {
    jwt.verify (token, process.env.TOKEN_SECRET_KEY, (err, user) => {
      if (err) return reject (err);

      if (user) return resolve (user);
    });
  });
};

const authenticate = async function (req, res, next) {
  // bearerToken will be given from redux store
  const bearerToken = req.headers.authorization;
  // console.log("bearerToken:", bearerToken)

  const token = bearerToken.split (' ')[1];
  // console.log("token:", token)

  const user = await verifyToken (token);
  // console.log("user:", user)

  req.user = user;

  next ();
};

module.exports = authenticate;
