const express = require("express");
const {
  createTask,
  getAllTask,
  updateTask,
  getSingleTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const authenticateToken = require("../middleware/protectRoute");
const router = express.Router();

router.use(authenticateToken);
router.post("/create", createTask);
router.get("/getall", getAllTask).get("/singleTask/:id", getSingleTask);
router.put("/update/:id", updateTask).delete("/delete/:id", deleteTask);

module.exports = router;
