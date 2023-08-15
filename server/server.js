require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded form data
// app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DBNAME || "todo";

app.use("/api/auth/", require("./routes/auth"));

// const Todo = require("./models/Todo");

// app.get("/", (_req, res) => {
//   res.json({
//     content: "API is Working!",
//   });
// });

/**
 * POST - Router | Controller
 */

// app.post("/create", async (req, res) => {
//   const todo = new Todo(req.body);
//   const createdTodo = await todo.save();

//   if (!createdTodo)
//     return res
//       .status(500)
//       .json({ success: false, message: "Fail to Create Todo!" });

//   res.status(201).json({
//     success: true,
//     message: "Todo Created Successfully!",
//   });
// });

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
