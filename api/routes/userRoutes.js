var router = require("express").Router();
var userList = require("../controllers/userController");

// User Routes
// TODO: Make paginate for users
router.route("/").get(userList.list_all_users);

router
  .route("/:uId")
  .get(userList.get_user)
  .delete(userList.delete_user)
  .put(userList.update_user);

router.route("/login").post(userList.login);

router.route("/register").post(userList.register);

router.route("/search/:key").get(userList.search_user);

module.exports = router;
