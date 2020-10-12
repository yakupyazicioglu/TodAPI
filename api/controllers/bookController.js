var mongoose = require('mongoose');
var Book = mongoose.model('Book');

exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.list_all_books = function (req, res) {
  Book.find({}, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.create_a_book = function (req, res) {
  var new_book = new Book(req.body);
  console.log(req.body);
  new_book.save(function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.find_a_book = function (req, res) {
  console.log(req.params);
  Book.findOne({"id": req.params.bookId }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.find_book_isbn = function (req, res) {
  console.log(req.params);
  Book.findOne({"isbn": req.params.isbn }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.find_book_title = function (req, res) {
  console.log(req.params);
  Book.find({"title": req.params.title }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.find_book_author = function (req, res) {
  console.log(req.params);
  Book.find({"authors.0.name": req.params.author }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

//Working
exports.find_book_publishdate = function (req, res) {
  console.log(req.params);
  Book.find({"publishDate": req.params.publishDate }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

//Working
exports.update_a_book = function (req, res) {
  Book.findOneAndUpdate({
    id: req.params.bookId
  }, req.body, {
    new: true
  }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

//Working
exports.delete_a_book = function (req, res) {
  Book.findOneAndRemove({
    id: req.params.bookId
  }, function (err, book) {
    if (err)
      res.send(err);
    res.json({
      message: 'Book successfully deleted'
    });
  });
};

//TODO A service for counts all the books
exports.books_count = function (req, res) {
  Book.find({
    id: req.params.bookId
  }, function (err, book) {
    if (err)
      res.send(err);
    res.json({
      message: 'Book successfully deleted'
    });
  });
};