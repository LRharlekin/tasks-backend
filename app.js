const express = require("express");
const app = express();
// import routers
const tasksRouter = require("./routes/tasks");

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world.");
});

app.use("/api/v1/tasks", tasksRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Listening on PORT:${port}.`);
});
