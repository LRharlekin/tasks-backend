const express = require("express");

const router = express.Router();

// import controller methods
const {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getItem).put(updateItem).delete(deleteItem);

module.exports = router;
