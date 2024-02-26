const express = require("express");
const {
  createTask,
  getAllTask,
  updateTask,
  getSingleTask,
  deleteTask,
} = require("../controllers/tasks.controller");
const protectRoute = require("../middleware/protectRoute");
const router = express.Router();

// router.use(protectRoute);
router
  .post("/create", protectRoute,createTask)
  .get("/getall", getAllTask)
  .get("/singleTask/:id", getSingleTask)
  .put("/update/:id", updateTask)
  .delete("/delete/:id", deleteTask);

module.exports = router;
