var mongoose = require("mongoose");
var Author = require("../models/author");

//Get all the authors
exports.list_all_authors = function (req, res) {
  Author.find({}, function (err, author) {
    if (err) res.send(err);
    res.json(author);
  }).limit(20);
};

//Find a author by Id
exports.get_author = function (req, res) {
  console.log(req.params);
  Author.findOne({ aId: req.params.aId }, function (err, author) {
    if (err) res.send(err);
    res.json(author);
  });
};

//Search an author
exports.search_author = function (req, res) {
  console.log(req.params);
  Author.find({ $text: { $search: req.params.key } }, function (err, author) {
    if (err) res.send(err);
    res.json(author);
  }).limit(20);
};
