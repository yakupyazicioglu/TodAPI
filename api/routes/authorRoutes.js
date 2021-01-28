var router = require("express").Router();
var authorList = require("../controllers/authorController");

// author Routes
// TODO: Make paginate for authors
router.route("/").get(authorList.list_all_authors);

router
  .route("/:aId")
  .get(authorList.find_an_author)
  .put(authorList.update_an_author)
  .delete(authorList.delete_an_author);

router.route("/search/author/:key").get(authorList.search_author);

module.exports = router;
