import express from "express";
import usersRouter from "./routes/users.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/users", usersRouter);
