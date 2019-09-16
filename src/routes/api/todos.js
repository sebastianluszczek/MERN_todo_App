import express from "express";

import Todo from "../../models/Todo";

const todoRouter = express.Router();

todoRouter.get("/", async (req, res) => {
  try {
    const response = await Todo.find({});
    res.json(response);
  } catch (err) {
    throw err;
  }
});

todoRouter.post("/", async (req, res) => {
  try {
    const response = await Todo.create({
      title: req.body.title
    });
    res.json(response);
  } catch (err) {
    throw err;
  }
});

todoRouter.delete("/:id", async (req, res) => {
  try {
    const response = await Todo.findByIdAndRemove({ _id: req.params.id });
    res.json(response);
  } catch (err) {
    throw err;
  }
});

todoRouter.put("/:id", async (req, res) => {
  try {
    const response = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.json(response);
  } catch (err) {
    throw err;
  }
});

export default todoRouter;
