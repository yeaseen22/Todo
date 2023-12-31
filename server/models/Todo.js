const { Schema, model } = require("mongoose");

const TodoSchema = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String },
    isCompleted: { type: Boolean, default: false },
    isSeleced: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const todo = model("Todo", TodoSchema);
module.exports = todo;
