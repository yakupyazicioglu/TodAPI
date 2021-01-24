var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  aId: {
    type: String,
    required: true
  },
  aName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  cover: {
    type: String
  },
  summary: {
    type: String,
    required: true,
    trim: true
  },
});

AuthorSchema.index({aName: 'text'});

// Virtual for author's URL
AuthorSchema
  .virtual('url')
  .get(function () {
    return '/author/' + this._id;
  });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);