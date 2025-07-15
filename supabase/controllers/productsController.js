import supabase from "../db.js";

export const getProductsController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("username")
    .eq("username", username)
    .eq("password", password)
    .single();

  if (userError || !userData) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*");

  if (productsError) {
    return res.status(500).json({ error: "Failed to fetch products" });
  }

  res.json(products);
};
