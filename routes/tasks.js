const express = require("express");

const router = express.Router();

// import controller methods
const {
  getAllTasks,
  getTask,
  createTask,
  editTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getTask)
  .put(editTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
