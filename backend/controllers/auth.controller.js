// const {func} = require ('joi');
const jwt = require ('jsonwebtoken');
require ('dotenv').config ();
const {body, validationResult} = require ('express-validator');
const User = require ('../models/user.model');

const newToken = user => {
  return jwt.sign ({user: user}, process.env.JWT_ACCESS_KEY); //sec part is key
};

//register the user
const register = async (req, res) => {
  const errors = validationResult (req);

  //error contains {msg,param,location}

  if (!errors.isEmpty ()) {
    let newErrors = errors.array ().map (({msg, param, location}) => {
      return {
        [param]: msg,
      };
    });

    return res.status (400).json ({
      errors: newErrors,
    });
  }
  try {
    let user = await User.findOne ({email: req.body.email}).lean ().exec ();
    if (user) return res.status (400).send ('user already exits');
    user = await User.create (req.body);
    //tokens
    //json web tokens -- every time the req sends the token we get user
    //
    const token = newToken (user);

    return res.status (201).json ({user, token});
  } catch (e) {
    return res.status (500).json ({message: e.message});
  }
};

//login the user
const login = async (req, res) => {
  const errors = validationResult (req);

  //error contains {msg,param,location}

  if (!errors.isEmpty ()) {
    let newErrors = errors.array ().map (({msg, param, location}) => {
      return {
        [param]: msg,
      };
    });

    return res.status (400).json ({
      errors: newErrors,
    });
  }
  try {
    let user = await User.findOne ({email: req.body.email});

    if (!user) {
      return res
        .status (400)
        .send ('please provide correct email and password');
    }

    const match = await user.checkPass (req.body.password);
    if (!match) {
      return res
        .status (400)
        .send ('please provide correct email and password');
    }

    const token = newToken (user);
    return res.status (201).send ({user, token});
  } catch (e) {
    return res.status (500).json ({message: e.message});
  }
};

// router.post (
//   '/',
//   body ('first_name')
//     .isLength ({
//       min: 4,
//       max: 20,
//     })
//     .withMessage (
//       'first name is required with atleast 4 chars and max 20 char'
//     ),
//   body ('last_name').notEmpty ().withMessage ('price is required'),
//   body ('email').custom (async value => {
//     const isEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test (value);

//     if (!isEmail) {
//       throw new Error ('please Enter proper email');
//     }

//     const uniq = await User.findOne ({
//       email: value,
//     })
//       .lean ()
//       .exec ();

//     if (uniq) {
//       throw new Error ('email already exist');
//     }

//     return true;
//   }),
//   async (req, res) => {
//     console.log (body ('name'));

//     const errors = validationResult (req);

//     //error contains {msg,param,location}

//     if (!errors.isEmpty ()) {
//       let newErrors = errors.array ().map (({msg, param, location}) => {
//         return {
//           [param]: msg,
//         };
//       });

//       return res.status (400).json ({
//         errors: newErrors,
//       });
//     }
//     //400 series front mistake.
//     try {
//       const user = await User.create (req.body);

//       return res.status (201).send ({
//         user,
//       });
//     } catch (e) {
//       return res.status (500).send ({
//         message: e.message,
//         status: 'Failed',
//       });
//     }
//   }
// );

// // router.patch ('/:id', async (req, res) => {
// //   try {
// //     const user = await User.findByIdAndUpdate (req.body).lean ().exec ();

// //     return res.status (201).send ({user});
// //   } catch (e) {
// //     return res.status (500).send ({message: e.message, status: 'Failed'});
// //   }
// // });

// router.get ('/', async (req, res) => {
//   try {
//     const user = await User.find ().lean ().exec ();

//     return res.status (201).send ({
//       user,
//     });
//   } catch (e) {
//     return res.status (500).send ({
//       message: e.message,
//       status: 'Failed',
//     });
//   }
// });

// router.delete ('/:id', async (req, res) => {
//   try {
//     const newUser = await User.findByIdAndDelete (req.params.id)
//       .lean ()
//       .exec ();

//     // delete prevfile using prevPath.

//     return res.status (201).send ({newUser});
//   } catch (e) {
//     return res.status (500).send ({message: e.message, status: 'Failed'});
//   }
// });

module.exports = {register, login, newToken};
