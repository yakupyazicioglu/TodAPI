var router = require("express").Router();
var genreList = require("../controllers/genreController");

// Genre Routes
router.route("/").get(genreList.list_all_genres);

router
  .route("/:gId")
  .get(genreList.find_a_genre)
  .put(genreList.update_a_genre)
  .delete(genreList.delete_a_genre);

router.route("/search/genre/:key").get(genreList.search_genre);

module.exports = router;
