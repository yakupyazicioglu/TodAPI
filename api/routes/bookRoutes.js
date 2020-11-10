'use strict';
module.exports = function (app) {
  var bookList = require('../controllers/bookController');

  // default route
  app.get('/', (req, res) => {
    res.json({
      "message": "Welcome to BooksAPI app"
    });
  });

  // booksApi Routes
  app.get('/test', bookList.test);

  app.route('/books')
    .get(bookList.list_all_books)
    .post(bookList.create_a_book);

  app.route('/books/:bookId')
    .get(bookList.find_a_book)
    .put(bookList.update_a_book)
    .delete(bookList.delete_a_book);

  app.route('/title/:title')
    .get(bookList.find_book_title);

  app.route('/books/:author')
    .post(bookList.find_book_author);

  app.route('/isbn/:isbn')
    .get(bookList.find_book_isbn);

  app.route('/publishDate/:publishDate')
    .get(bookList.find_book_publishdate);
};