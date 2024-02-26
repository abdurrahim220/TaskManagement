const User = require("../models/User");
const bcrypt = require("bcryptjs");


const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exits" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashPassword });

    if (newUser) {
    
    }

    await newUser.save();

    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // console.log(username,password)

    const user = await User.findOne({ username });

    const isPassword = await bcrypt.compare(password, user?.password);
    if (!user || !isPassword) {
      return res.status(400).json({ error: "Invalid credential" });
    }

   
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
   
      res.status(200).json({ message: "Logged out successfully!!" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error in Login" });
    }
  };
module.exports = { signUp, login,logOut };
