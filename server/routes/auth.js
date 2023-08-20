// const express = require("express");
// const Todo = require("../models/Todo");

// // const router = express.Router();

// /**
//  * ==== Getting all Todos ===== (READ)
//  */
// router.get("/", async (_req, res) => {
//   try {
//     const allTodos = await Todo.find({});
//     res.json({
//       content: "API is Working!",
//       data: allTodos,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something Went Wrong!" });
//   }
// });

// /**
//  * POST - Router | Controller (CREATE)
//  */
// router.post("/create", async (req, res) => {
//   try {
//     const todo = new Todo(req.body);
//     const createdTodo = await todo.save();

//     if (!createdTodo)
//       return res
//         .status(500)
//         .json({ success: false, message: "Fail to Create Todo!" });

//     res.status(201).json({
//       success: true,
//       message: "Todo Created Successfully!",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something Went Wrong!" });
//   }
// });

// /**
//  * ==== Update ====
//  */
// router.patch("/update", async (req, res) => {
//   try {
//     const userData = req.body;
//     const todoId = req.query.id;
//     console.log("hello update", userData);

//     const todo = await Todo.findOneAndUpdate({ _id: todoId }, userData);
//     if (!todo) return res.json({ success: false, message: "Todo Not Found!" });

//     res.status(200).json({
//       success: true,
//       message: "Todo Updated!",
//       todo,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something Went Wrong!" });
//   }
// });

// /**
//  * ==== Delete ====
//  */
// router.delete("/delete", async (req, res) => {
//   try {
//     const todoId = req.query.id;

//     const todo = await Todo.findOneAndRemove({ _id: todoId });
//     if (!todo) return res.json({ success: false, message: "Todo Not Found!" });

//     res.status(200).json({
//       success: true,
//       message: "Todo Deleted!",
//       todo,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something Went Wrong!" });
//   }
// });

// module.exports = router;
