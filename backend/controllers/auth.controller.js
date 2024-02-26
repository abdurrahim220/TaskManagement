const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashPassword });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const savedUser = await newUser.save();

    res.cookie("jwt", token, { httpOnly: true });

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("jwt", token, { httpOnly: true });

    res.status(200).json({
      _id: user._id,
      username: user.username,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error in Login" });
  }
};

const logOut = (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie("jwt");

    res.status(200).json({ message: "Logged out successfully!!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error in Logout" });
  }
};

module.exports = { signUp, login, logOut };
