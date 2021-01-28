var router = require("express").Router();

// default route
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to TodAPI",
  });
});

module.exports = router;
