require("dotenv").config();
var mongoose = require("mongoose");
var User = require("../models/user");
var bcrypt = require("bcrypt");
const utils = require("../utils/verifyToken");

//Login user with credentials
exports.register = function (req, res) {
  var userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  User.create(userData, function (err, user) {
    const error = {
      code: 401,
      message: "Can't create user!",
    };
    if (err) res.send(error);
    const message = {
      message: "User registered!",
    };
    res.json(user);
  });
};

//Login user with email and pass
exports.login = function (req, res, callback) {
  User.findOne({ username: req.body.username }).exec(function (err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      const error = {
        //user: {},
        code: 401,
        message: "User not found!",
      };
      res.send(error);
      return callback(error);
    }
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result === true) {
        // generate token
        const token = utils.generateToken(user);
        // get basic user details
        const userObj = utils.getCleanUser(user);
        // return the token along with user details
        const message = {
          message: "User logged in!",
        };
        return res.send({ user: userObj, token, message });
      } else {
        const error = {
          //user: {},
          code: 401,
          message: "Email and password do not match!",
        };
        res.send(error);
        return callback();
      }
    });
  });
};

//Get all the Users
exports.list_all_users = function (req, res) {
  User.find({}, function (err, user) {
    const message = {
      code: 402,
      message: "There is no user on database!!",
    };
    if (err) res.send(message);
    res.json(user);
  });
};

//Get user with id
exports.get_user = function (req, res) {
  User.findOne(
    {
      id: req.params.id,
    },
    function (err, user) {
      const message = {
        code: 403,
        message: "User not found!!",
      };
      if (err) res.send(message);
      res.json(user);
    }
  );
};

//TODO:  Working
exports.update_user = function (req, res) {
  User.findOneAndUpdate(
    {
      id: req.params.id,
    },
    req.body,
    {
      new: true,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json({
        message: "User successfully updated",
      });
    }
  );
};

//Working
exports.delete_user = function (req, res) {
  User.findOneAndRemove(
    {
      id: req.params.id,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json({
        message: "User successfully deleted",
      });
    }
  );
};

//FIXME: Search a user
exports.search_user = function (req, res) {
  console.log(req.params);
  User.find({ $text: { $search: req.params.key } }, function (err, user) {
    const message = {
      code: 402,
      message: "This user is not on database!!",
    };
    if (err) res.send(err, message);
    res.json(user);
  }).limit(20);
};
