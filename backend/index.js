const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToMongoDB = require("./db/connectMongoDB");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");
const tasksRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", tasksRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
