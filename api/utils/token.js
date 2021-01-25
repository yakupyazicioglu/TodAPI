// generate token using secret from process.env.JWT_SECRET
var jwt = require("jsonwebtoken");

// generate token and return it
function generateToken(use) {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!use) return null;
  var user = use[0];
  var u = {
    userId: user.id,
    userName: user.userName,
    isAdmin: "true",
  };

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  });
}

// return basic user details
function getCleanUser(use) {
  if (!use) return null;
  var user = use[0];
  return {
    userId: user.id,
    userName: user.userName,
    isAdmin: "true",
  };
}

module.exports = {
  generateToken,
  getCleanUser,
};
