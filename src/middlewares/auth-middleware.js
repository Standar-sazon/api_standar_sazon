const jwt = require('jsonwebtoken');

const authMiddleware = function (req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return next(new Error('Invalid token'));
  }

  const [, token] = authorizationHeader.split(' ');

  if (!token) {
    return next(new Error('Invalid token'));
  }

  jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
    if (err) {
      console.error(err.message);
      return next(new Error('Invalid token'));
    }

    console.debug('Decoded token', decoded);

    return next(null, decoded);
  });
};

module.exports = authMiddleware;