import jwt from "jsonwebtoken";
const SECRET_KEY = "fff";

export const generateToken = (customer) => {
  const payload = {
    name: customer.name,
    email: customer.email,
    id: customer.id,
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (req, res, next) => {
  let token = req.query.token;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Not working",
    });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: err.message,
      });
    }
  });
};
