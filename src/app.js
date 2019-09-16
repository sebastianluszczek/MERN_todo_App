import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import todos from "./routes/api/todos";

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(err => {
    console.log(err);
    return;
  });

const app = express();

// cors policy
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// test request
app.get("/", (req, res) => {
  res.send("Test todo api");
});

// todos API
app.use("/api/todos", todos);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}...`)
);
