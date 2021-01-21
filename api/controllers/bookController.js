var mongoose = require('mongoose');
var Book = mongoose.model('Book');

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 5;

  return { limit, offset };
};

exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

//Get all the books
exports.list_all_books = function (req, res) {
  Book.paginate({}, { page: req.params.page , limit:  15}, function (err, book) {
    if (err)
      res.send(err);
    res.json(book.docs);
  });
};

//Useles for now
exports.create_a_book = function (req, res) {
  var new_book = new Book(req.body);
  new_book.save(function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

//Find a book by Id
exports.find_a_book = function (req, res) {
  console.log(req.params);
  Book.findOne({"bId": req.params.bookId }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  }).limit(20);
};

//Find a book by isbn
exports.find_book_isbn = function (req, res) {
  console.log(req.params);
  Book.findOne({"isbn": req.params.isbn }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

//Find a book by title
exports.find_book_title = function (req, res) {
  console.log(req.params);
  Book.find({"title": req.params.title }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  }).limit(20);
};

//Find an author by name
exports.find_book_author = function (req, res) {
  console.log(req.params);
  Book.find({"authors.0.aName": req.params.author }, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  }).limit(20);
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

//Update book fields with the given info
//The first data is the old one that we want to change, the second is what our goal
// {"genres.2.gId":"g189"}, {"genres.2.gId":"g113"}
exports.update_books = function (req, res) {
  console.log(req.params);
  Book.updateMany({  }, {  }, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
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
      message: 'Books'
    });
  });
};