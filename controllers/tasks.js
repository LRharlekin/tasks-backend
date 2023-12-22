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
const getTask = (req, res) => {
  // const task = db.find((task) => task.id === Number(req.params.id));
  // if (!task) {
  //   return res.status(400).send(`task with id ${req.params.id} wasn't found.`);
  // }
  res.status(200).send(`get single task with ID: ${req.params.id}`);
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
const deleteTask = (req, res) => {
  res.send(`delete single task with ID: ${req.params.id}`);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
