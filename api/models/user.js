var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
      first: String,
      last: { type: String, trim: true }
    },
    age: { type: Number, min: 0 }
  });

//Export model
module.exports = mongoose.model('User', UserSchema);
