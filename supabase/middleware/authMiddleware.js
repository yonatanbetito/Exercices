import { isUserLoggedIn } from "../controllers/authController.js";

export const authenticateUser = (req, res, next) => {
  const { username } = req.body;

  if (!username || !isUserLoggedIn(username)) {
    return res.status(401).json({ error: "Authentication required" });
  }

  req.user = { username };
  next();
};
