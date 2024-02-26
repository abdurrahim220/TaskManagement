const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database connected!!");
  } catch (error) {
    console.log("Error Connect:", error.message);
  }
};



module.exports = connectToMongoDB;