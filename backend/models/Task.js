const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  // userId: { type: String, required: true },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false },
});

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
