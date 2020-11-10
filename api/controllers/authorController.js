var mongoose = require('mongoose');
var Author = mongoose.model('Author');

//Get all the authors
exports.list_all_authors = function (req, res) {
  Author.find({}, function (err, author) {
    if (err)
      res.send(err);
    res.json(author);
  });
};

//Find a author by Id
exports.find_an_author = function (req, res) {
  console.log(req.params);
  Author.findOne({"aId": req.params.aId }, function (err, author) {
    if (err)
      res.send(err);
    res.json(author);
  });
};

//Find an author by name
exports.find_author_name = function (req, res) {
  console.log(req.params);
  Author.find({"aName": req.params.aName }, function (err, author) {
    if (err)
      res.send(err);
    res.json(author);
  });
};

//Working
exports.update_an_author = function (req, res) {
  Author.findOneAndUpdate({
    id: req.params.aId
  }, req.body, {
    new: true
  }, function (err, author) {
    if (err)
      res.send(err);
    res.json(author);
  });
};

//Working
exports.delete_an_author = function (req, res) {
  Author.findOneAndRemove({
    id: req.params.aId
  }, function (err, author) {
    if (err)
      res.send(err);
    res.json({
      message: 'author successfully deleted'
    });
  });
};