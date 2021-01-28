var mongoose = require("mongoose");
var Genre = require("../models/genre");

//Get all the genres
exports.list_all_genres = function (req, res) {
  Genre.find({}, function (err, genre) {
    if (err) res.send(err);
    res.json(genre);
  });
};

//Find a genre by Id
exports.get_genre = function (req, res) {
  Genre.findOne(
    {
      gId: req.params.gId,
    },
    function (err, genre) {
      if (err) res.send(err);
      res.json(genre);
    }
  );
};
