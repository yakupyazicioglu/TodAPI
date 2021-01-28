var router = require("express").Router();
var bookList = require("../controllers/bookController");

// books Routes
router.route("/:page").post(bookList.list_all_books);

router
  .route("/:bookId")
  .get(bookList.find_a_book)
  .put(bookList.update_a_book)
  .delete(bookList.delete_a_book);

router.route("/search/book/:key").get(bookList.search_book);

router.route("/isbn/:isbn").get(bookList.find_book_isbn);

router.route("/ubooks").put(bookList.update_books);

module.exports = router;
