const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Get the token from the cookie or authorization header
  const token = req.cookies.jwt || req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    // Attach the user information to the request object
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  });
};

module.exports = authenticateToken;
