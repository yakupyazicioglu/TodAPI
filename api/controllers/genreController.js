var mongoose = require('mongoose');
var Genre = mongoose.model('Genre');

//Get all the genres
exports.list_all_genres = function (req, res) {
    Genre.find({}, function (err, genre) {
        if (err)
            res.send(err);
        res.json(genre);
    });
};

//Find a genre by Id
exports.find_a_genre = function (req, res) {
    console.log(req.params);
    Genre.findOne({
        "gId": req.params.gId
    }, function (err, genre) {
        if (err)
            res.send(err);
        res.json(genre);
    });
};

//Search a genre
exports.search_genre = function (req, res) {
    console.log(req.params);
    Genre.find({$text: {$search: req.params.key}}, function (err, genre) {
      if (err)
        res.send(err);
      res.json(genre);
    });
  };

//Find an genre by name
exports.find_genre_name = function (req, res) {
    console.log(req.params);
    Genre.find({
        "gName": req.params.gName
    }, function (err, genre) {
        if (err)
            res.send(err);
        res.json(genre);
    });
};

//Working
exports.update_a_genre = function (req, res) {
    Genre.findOneAndUpdate({
        id: req.params.gId
    }, req.body, {
        new: true
    }, function (err, genre) {
        if (err)
            res.send(err);
        res.json(genre);
    });
};

//Working
exports.delete_a_genre = function (req, res) {
    Genre.findOneAndRemove({
        id: req.params.gId
    }, function (err, genre) {
        if (err)
            res.send(err);
        res.json({
            message: 'genre successfully deleted'
        });
    });
};