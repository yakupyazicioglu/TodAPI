var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  bId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  cover: {
    type: String,
  },
  //TODO Define the data with ObjectId
  authors: {
    type: Array,
    ref: "Author",
    required: true,
  },
  publisher: {
    type: String,
    trim: true,
  },
  publishDate: {
    type: String,
  },
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  //TODO Define the data with ObjectId
  genres: {
    type: Array,
    ref: "Genre",
  },
});

BookSchema.index({ title: "text" });
//BookSchema.index({'$**': 'text'});

BookSchema.plugin(mongoosePaginate);

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  return "/book/" + this._id;
});

module.exports = mongoose.model("Book", BookSchema);
