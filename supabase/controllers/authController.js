import supabase from "../db.js";

const loggedUsers = [];

export const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  const { data, error } = await supabase
    .from("users")
    .select("username")
    .eq("username", username)
    .eq("password", password)
    .single();

  if (error || !data) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  loggedUsers.push(data.username);

  res.json({
    message: "Login successful",
    username: data.username,
  });
};

export const isUserLoggedIn = (username) => {
  return loggedUsers.includes(username);
};
