var router = require("express").Router();
var bookList = require("../controllers/bookController");

// books Routes
router.route("/p/:page").post(bookList.list_all_books);

router
  .route("/:bookId")
  .get(bookList.get_book);

router.route("/search/:key").get(bookList.search_book);

router.route("/isbn/:isbn").get(bookList.book_isbn);

module.exports = router;
