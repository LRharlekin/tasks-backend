const Task = require("../models/Task");
const asyncWrapper = require("../middleware/asyncWrapper");

/* 
Documentation for Mongoose Queries: https://mongoosejs.com/docs/queries.html
Mongoose models provide several static helper functions for CRUD operations.
 */

// get all the tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ status: "success", data: tasks });
});

/*
const getAllTasks = async (req, res) => { 
  try {
    const tasks = await Task.find({});
    res.status(200).json({ status: "success", data: tasks });
  } catch (error) {
    res.status(500).json({ status: "server error", msg: error });
  } 
};
  */

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

// edit a single task (PUT)
const editTask = async (req, res) => {
  // Using Model.findOneAndReplace() query
  try {
    const { id: taskID } = req.params;
    // Model.findOneAndReplace({conditions}, {replacement}, {options})
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      // returnDocument: "after",
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!task) {
      return res.status(404).json({
        msg: `No task with ID: ${taskID} found. Database hasn\'t been updated`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

// update a single task (PATCH)
const updateTask = async (req, res) => {
  // Using Model.findByIdAndUpdate() query
  try {
    const { id: taskID } = req.params;
    // Model.findOneAndUpdate(id, {update}, {options})
    const task = await Task.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        msg: `No task with ID: ${taskID} found. Database hasn\'t been updated`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

  /* 
  // Using Model.findOneAndUpdate() query
  try {
    const { id: taskID } = req.params;
    // Model.findOneAndUpdate({conditions}, {update}, {options})
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      // returnDocument: "after",
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        msg: `No task with ID: ${taskID} found. Database hasn\'t been updated`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
   */
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
  editTask,
  updateTask,
  deleteTask,
};
