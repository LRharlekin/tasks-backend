const mongoose = require("mongoose");

// The Schema defines the structure of the document.
// The Model provides an interface to the database.

// Syntax for Schema() constructor:
// Schema({Obj with type definitions}[, {Obj with options}])
// Only the properties specified in the schema will be passed on to the db, everything else will be ignored.
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// When you call mongoose.model() on a schema, Mongoose compiles a model for you.
// Syntax of mongoose.model():
// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example below, the model Task is for the tasks collection in the database.

module.exports = mongoose.model("Task", TaskSchema);

/* 
// Instantiating the model will create a document, e.g.:

const taskToAdd = new Task({name: 'Buy AAA batteries', completed: false});
await taskToAdd.save();

// OR

const anotherTaskToAdd = await Task.create({name: 'Buy AAA batteries', completed: false})

// OR, for inserting large batches of documents

const manyTasksToAdd = await Task.insertMany([{name: 'Buy AAA batteries', completed: false}, {...}, {...}, ...]);
 */
