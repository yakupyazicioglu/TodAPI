var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  authorId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  date_of_birth: {
    type: Date
  },
  date_of_death: {
    type: Date
  },
});

// Virtual for author's lifespan
AuthorSchema
  .virtual('lifespan')
  .get(function () {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
  });

// Virtual for author's URL
AuthorSchema
  .virtual('url')
  .get(function () {
    return '/author/' + this._id;
  });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);