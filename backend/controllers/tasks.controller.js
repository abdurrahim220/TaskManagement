const Tasks = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
   

    const newTask = new Tasks({ title, description, dueDate });

    const savedTask = await newTask.save();
     res.status(201).json({
      message: "Task created successfully",
      tasks: savedTask,
    });
  } catch (error) {
    
    res.status(500).json({ error:error.message });
  }
};

const getAllTask = async (req, res) => {
  const tasks = await Tasks.find();

  res.status(200).json( tasks );
  try {
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Tasks.findById(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    return res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
