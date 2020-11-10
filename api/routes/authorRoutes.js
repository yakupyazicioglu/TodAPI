'use strict';
module.exports = function (app) {
  var authorList = require('../controllers/authorController');

  // default route
  app.get('/', (req, res) => {
    res.json({
      "message": "Welcome to BooksAPI app"
    });
  });

  // booksApi Routes
  app.route('/authors')
    .get(authorList.list_all_authors);

  app.route('/authors/:aId')
    .get(authorList.find_an_author)
    .put(authorList.update_an_author)
    .delete(authorList.delete_an_author);

  app.route('/authors/:aName')
    .post(authorList.find_author_name);
};