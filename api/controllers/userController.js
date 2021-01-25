var mongoose = require("mongoose");
var User = mongoose.model("User");

//Login user with credentials
exports.register = function (req, res) {
  var userData = {
    email: req.body.email,
    username: req.body.username,
    name: req.body.name,
    password: req.body.password,
  };

  User.create(userData, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

//Register user with credentials
exports.login = function (req, res) {
  User.findOne({ username: req.params.username }, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

//Get all the Users
exports.list_all_users = function (req, res) {
  User.find({}, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

//Get logged in user
exports.get_user = function (req, res) {
  User.findOne(
    {
      id: req.params.uId,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

//Find a User by Id
exports.find_a_user = function (req, res) {
  console.log(req.params);
  User.findOne(
    {
      id: req.params.uId,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

//Search a User
exports.search_user = function (req, res) {
  console.log(req.params);
  User.find({ $text: { $search: req.params.key } }, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

//Working
exports.update_user = function (req, res) {
  User.findOneAndUpdate(
    {
      id: req.params.uId,
    },
    req.body,
    {
      new: true,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

//Working
exports.delete_user = function (req, res) {
  User.findOneAndRemove(
    {
      id: req.params.uId,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json({
        message: "User successfully deleted",
      });
    }
  );
};
