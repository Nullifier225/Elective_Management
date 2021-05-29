var jwt = require('jsonwebtoken');

// generate token and return it
function generateToken(user) {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!user) return null;
  //console.log(user)
  return jwt.sign({user: user.emailid}, process.env.JWT_SECRET, {
    expiresIn: "60s"
  });
}

// return basic user details
function getCleanUser(user) {
  if (!user) return null;

  return user.emailid

}

module.exports = {
  generateToken,
  getCleanUser
}