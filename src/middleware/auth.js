import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateAccessToken = (customerName) => {
  return jwt.sign(customerName, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};

export default authenticateToken;
