require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DBNAME || "todo";

const Todo = require("./models/Todo");


/**
 * ==== Getting all Todos ===== (READ)
 */
app.get("/", (_req, res) => {
  const allTodos = Todo.find({});

  res.json({
    content: "API is Working!",
    data: allTodos,
  });
});


/**
 * POST - Router | Controller (CREATE)
 */
app.post("/create", async (req, res) => {
  const todo = new Todo(req.body);
  const createdTodo = await todo.save();

  if (!createdTodo)
    return res
      .status(500)
      .json({ success: false, message: "Fail to Create Todo!" });

  res.status(201).json({
    success: true,
    message: "Todo Created Successfully!",
  });
});


/**
 * ==== Update ====
 */
app.patch('/update', async (req, res) => {
  try {
    const userData = req.body;
    const todoId = req.params.id;

    const todo = await Todo.find({ _id: todoId });
    if (!todo) return res.json({ success: false, message: "Todo Not Found!" });

    todo.content = userData.content;
    todo.name = userData.name;
    await todo.save();

    res.status(200).json({
      success: true,
      message: "Todo Updated!",
      todo,
    });

  } catch(error){
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
});


/**
 * ==== Delete ====
 */
app.delete('/delete', async (req, res) => {
  try {
    const todoId = req.params.id;

    const todo = await Todo.findOneAndRemove({ _id: todoId });
    if (!todo) return res.json({ success: false, message: "Todo Not Found!" });

    res.status(200).json({
      success: true,
      message: "Todo Deleted!",
      todo,
    });

  } catch(error){
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
});


// DB Connection..
(async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Server Connection..
    app.listen(PORT, () =>
      console.log(
        `Server running on ${PORT} and Database Connected on mongodb://127.0.0.1:/${DB_NAME}`
      )
    );
  } catch (error) {
    console.log(`connection error: ${error}`);
  }
})();
