const mongoose = require ('mongoose');

module.exports = () => {
  return mongoose.connect (
    'mongodb+srv://nileshk17:nileshk17@cluster0.ntjtm.mongodb.net/Qoura'
  );
};
