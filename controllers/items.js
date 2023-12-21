// get all the items
const getAllItems = (req, res) => {
  res.status(200).send("all items");
};

// get a single item
const getItem = (req, res) => {
  // const item = db.find((item) => item.id === Number(req.params.id));
  // if (!item) {
  //   return res.status(400).send(`Item with id ${req.params.id} wasn't found.`);
  // }
  res.status(200).send(`get single item with ID: ${req.params.id}`);
};

// create a new item
const createItem = (req, res) => {
  res.send("create item");
};

// update a single item
const updateItem = (req, res) => {
  res.send(`update single item with ID: ${req.params.id}`);
};
// delete a single item
const deleteItem = (req, res) => {
  res.send(`delete single item with ID: ${req.params.id}`);
};

module.exports = {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
