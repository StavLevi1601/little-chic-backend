import express from "express";
import usersRouter from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";
import authenticateToken from "./middleware/auth.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

app.use(cors());

app.use("/auth", authRouter);
app.use("/users", authenticateToken, usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
