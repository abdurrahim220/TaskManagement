const User = require("../models/User.js");

const jwt = require("jsonwebtoken");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    // console.log(token)

    if (!token) {
      return res.status(401).json({ error: "Unauthorized no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized access" });
    }
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error in Login" });
  }
};

module.exports = protectRoute;
