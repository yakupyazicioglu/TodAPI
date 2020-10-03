'use strict';

module.exports = function (app) {
  var bookList = require('../controllers/bookController');

  // default route
  app.get('/', (req, res) => {
    res.json({
      "message": "Welcome to ZeptoBook Product app"
    });
  });

  // bookList Routes
  app.route('/test')
    .get(bookList.test);

  app.route('/books')
    .get(bookList.list_all_books)
    .post(bookList.create_a_book);

  app.route('/books/:bookId')
    .get(bookList.read_a_book)
    .put(bookList.update_a_book)
    .delete(bookList.delete_a_book);
};