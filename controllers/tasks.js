// get all the tasks
const getAllTasks = (req, res) => {
  res.status(200).send("all tasks");
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
const createTask = (req, res) => {
  res.send("create task");
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
