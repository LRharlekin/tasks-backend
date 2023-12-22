const Task = require("../models/Task");

/* 
Documentation for Mongoose Queries: https://mongoosejs.com/docs/queries.html
Mongoose models provide several static helper functions for CRUD operations.
 */

// get all the tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get a single task
const getTask = async (req, res) => {
  // Using Model.findById() query
  try {
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

  /* 
  // Using Model.findOne() query
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
   */
};

// create a new task
const createTask = async (req, res) => {
  try {
    const taskToAdd = await Task.create(req.body);
    res.status(201).json({ taskToAdd });
  } catch (error) {
    if ((error.errors.name.name = "ValidatorError")) {
      const errorMessage = error.errors.name.properties.message;
      res.status(500).json({ msg: errorMessage });
    } else {
      res.status(500).json({ msg: error });
    }
  }
};

// update a single task
const updateTask = (req, res) => {
  res.send(`update single task with ID: ${req.params.id}`);
};

// delete a single task
const deleteTask = async (req, res) => {
  // Using Model.findByIdAndDelete() query
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete(taskID);
    if (!task) {
      return res
        .status(404)
        .json(`No task with id: ${taskID} was found. Not deleted.`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

  /* 
  // Using Model.findOneAndDelete() query
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json(`No task with id: ${taskID} was found. Not deleted.`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
   */
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
