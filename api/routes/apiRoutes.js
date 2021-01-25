'use strict';
module.exports = function (app) {
    var bookList = require('../controllers/bookController');
    var authorList = require('../controllers/authorController');
    var genreList = require('../controllers/genreController');
    var userList = require('../controllers/userController');

    // default route
    app.get('/', (req, res) => {
        res.json({
            "message": "Welcome to TodAPI"
        });
    });

    // books Routes
    app.get('/api/test', bookList.test);

    app.route('/api/books/:page')
        .get(bookList.list_all_books);

    app.route('/api/book/:bookId')
        .get(bookList.find_a_book)
        .put(bookList.update_a_book)
        .delete(bookList.delete_a_book);

    app.route('/api/title/:title')
        .get(bookList.find_book_title);

    app.route('/api/search/book/:key')
        .get(bookList.search_book);

    app.route('/api/books/:author')
        .get(bookList.find_book_author);

    app.route('/api/isbn/:isbn')
        .get(bookList.find_book_isbn);

    app.route('/api/publishDate/:publishDate')
        .get(bookList.find_book_publishdate);

    app.route('/api/ubooks')
        .put(bookList.update_books);


    // author Routes
    app.route('/api/authors')
        .get(authorList.list_all_authors);

    app.route('/api/author/:aId')
        .get(authorList.find_an_author)
        .put(authorList.update_an_author)
        .delete(authorList.delete_an_author);

    app.route('/api/authors/:aName')
        .get(authorList.find_author_name);

    app.route('/api/search/author/:key')
        .get(authorList.search_author);


    // Genre Routes
    app.route('/api/genres')
        .get(genreList.list_all_genres);

    app.route('/api/genre/:gId')
        .get(genreList.find_a_genre)
        .put(genreList.update_a_genre)
        .delete(genreList.delete_a_genre);

    app.route('/api/genres/:gName')
        .get(genreList.find_genre_name);

    app.route('/api/search/genre/:key')
        .get(genreList.search_genre);

    // User Routes
    app.route('/api/users')
        .get(userList.list_all_users);

    app.route('/api/get-user')
        .get(userList.get_user);

    app.route('/api/user')
        .delete(userList.delete_user);

    app.route('/api/user/login')
        .post(userList.login);

    app.route('/api/user/register')
        .post(userList.register);

};