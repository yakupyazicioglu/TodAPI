'use strict';
module.exports = function (app) {
    var bookList = require('../controllers/bookController');
    var authorList = require('../controllers/authorController');
    var genreList = require('../controllers/genreController');

    // default route
    app.get('/', (req, res) => {
        res.json({
            "message": "Welcome to TodAPI"
        });
    });

    // books Routes
    app.get('/test', bookList.test);

    app.route('/books/:page')
        .get(bookList.list_all_books);

    app.route('/book/:bookId')
        .get(bookList.find_a_book)
        .put(bookList.update_a_book)
        .delete(bookList.delete_a_book);

    app.route('/title/:title')
        .get(bookList.find_book_title);

    app.route('/books/:author')
        .get(bookList.find_book_author);

    app.route('/isbn/:isbn')
        .get(bookList.find_book_isbn);

    app.route('/publishDate/:publishDate')
        .get(bookList.find_book_publishdate);

    app.route('/ubooks')
        .put(bookList.update_books);


    // author Routes
    app.route('/authors')
        .get(authorList.list_all_authors);

    app.route('/author/:aId')
        .get(authorList.find_an_author)
        .put(authorList.update_an_author)
        .delete(authorList.delete_an_author);

    app.route('/authors/:aName')
        .get(authorList.find_author_name);


    // genre Routes
    app.route('/genres')
        .get(genreList.list_all_genres);

    app.route('/genre/:gId')
        .get(genreList.find_a_genre)
        .put(genreList.update_a_genre)
        .delete(genreList.delete_a_genre);

    app.route('/genres/:gName')
        .get(genreList.find_genre_name);
};