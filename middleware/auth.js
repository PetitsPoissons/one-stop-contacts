const jwt = require('jsonwebtoken');
const config = require('config'); // to access the secret

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header('x-auth-token');

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token is valid
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user; // only grab user part of the payload
    next(); // move on
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
