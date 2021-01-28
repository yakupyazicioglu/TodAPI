var router = require("express").Router();
var bookList = require("../controllers/bookController");
var authorList = require("../controllers/authorController");
var genreList = require("../controllers/genreController");
var userList = require("../controllers/userController");

// default route
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to TodAPI",
  });
});

// books Routes
router.get("/api/test", bookList.test);

router.get("/api/books/:page", bookList.list_all_books);

router.route("/api/books/:page").get(bookList.list_all_books);

router
  .route("/api/book/:bookId")
  .get(bookList.find_a_book)
  .put(bookList.update_a_book)
  .delete(bookList.delete_a_book);

router.route("/api/title/:title").get(bookList.find_book_title);

router.route("/api/search/book/:key").get(bookList.search_book);

router.route("/api/books/:author").get(bookList.find_book_author);

router.route("/api/isbn/:isbn").get(bookList.find_book_isbn);

router
  .route("/api/publishDate/:publishDate")
  .get(bookList.find_book_publishdate);

router.route("/api/ubooks").put(bookList.update_books);

// author Routes
router.route("/api/authors").get(authorList.list_all_authors);

router
  .route("/api/author/:aId")
  .get(authorList.find_an_author)
  .put(authorList.update_an_author)
  .delete(authorList.delete_an_author);

router.route("/api/authors/:aName").get(authorList.find_author_name);

router.route("/api/search/author/:key").get(authorList.search_author);

// Genre Routes
router.route("/api/genres").get(genreList.list_all_genres);

router
  .route("/api/genre/:gId")
  .get(genreList.find_a_genre)
  .put(genreList.update_a_genre)
  .delete(genreList.delete_a_genre);

router.route("/api/genres/:gName").get(genreList.find_genre_name);

router.route("/api/search/genre/:key").get(genreList.search_genre);

// User Routes
router.route("/api/users").get(userList.list_all_users);

router.route("/api/get-user").get(userList.get_user);

router.route("/api/user").delete(userList.delete_user);

router.route("/api/user/login").post(userList.login);

router.route("/api/user/register").post(userList.register);

module.exports = router;
