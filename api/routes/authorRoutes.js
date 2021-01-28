var router = require("express").Router();
var authorList = require("../controllers/authorController");

// author Routes
// TODO: Make paginate for authors
router.route("/").get(authorList.list_all_authors);

router
  .route("/:aId")
  .get(authorList.get_author)

router.route("/search/:key").get(authorList.search_author);

module.exports = router;
