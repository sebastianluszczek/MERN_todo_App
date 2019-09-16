import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Todo", TodoSchema);
