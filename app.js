const express = require("express");
const app = express();
// import routers
const tasksRouter = require("./routes/tasks");

const connectDB = require("./db/connect");
require("dotenv").config();

const unknownRoute = require("./middleware/unknownRoute");
const errorHandlerMiddleware = require("./middleware/errorHandler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).send("hello world.");
});

app.use("/api/v1/tasks", tasksRouter);

app.use(unknownRoute);
app.use(errorHandlerMiddleware);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB...!");
    app.listen(port, () => {
      console.log(`Listening on PORT:${port}.`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
