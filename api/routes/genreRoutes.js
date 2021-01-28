var router = require("express").Router();
var genreList = require("../controllers/genreController");

// Genre Routes
router.route("/").get(genreList.list_all_genres);

router
  .route("/:gId")
  .get(genreList.get_genre)

module.exports = router;
