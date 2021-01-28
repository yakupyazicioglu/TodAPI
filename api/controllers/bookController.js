var mongoose = require("mongoose");
var Book = require("../models/book");

//Get all the books
exports.list_all_books = function (req, res) {
  Book.paginate({}, { page: req.params.page, limit: 20 }, function (err, book) {
    if (err) res.send(err);
    res.json(book.docs);
  });
};

//Find a book by Id
exports.get_book = function (req, res) {
  console.log(req.params);
  Book.findOne({ bId: req.params.bookId }, function (err, book) {
    if (err) res.send(err);
    res.json(book);
  }).limit(20);
};

//Find a book by isbn
exports.book_isbn = function (req, res) {
  console.log(req.params);
  Book.findOne({ isbn: req.params.isbn }, function (err, book) {
    if (err) res.send(err);
    res.json(book);
  });
};

//Search a book
exports.search_book = function (req, res) {
  Book.find({ $text: { $search: req.params.key } }, function (err, book) {
    const message = {
      code: 402,
      message: "Can't find the book, Sorry!!",
    };
    if (err) res.send(err, message);
    res.json(book);
  }).limit(20);
};

//Update book fields with the given info
//The first data is the old one that we want to change, the second is what our goal
// {"genres.2.gId":"g189"}, {"genres.2.gId":"g113"}
exports.update_books = function (req, res) {
  console.log(req.params);
  Book.updateMany({}, {}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
};
