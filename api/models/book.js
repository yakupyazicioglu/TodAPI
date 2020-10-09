'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema({
  bookId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String
  },
  authors: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  publisher: {
    type: String
  },
  publishDate: {
    type: String
  },
  summary: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  genres: [{
    type: Schema.Types.ObjectId,
    ref: 'Genre'
  }]
});

// Virtual for book's URL
BookSchema
  .virtual('url')
  .get(function () {
    return '/catalog/book/' + this._id;
  });

module.exports = mongoose.model('Book', BookSchema);