import supabase from "../db.js";

export const getProductsController = async (req, res) => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    return res.status(500).json({ error: "Failed to fetch products" });
  }

  res.json({
    message: "successfully",
    user: req.user.username,
    products: data,
    count: data.length,
  });
};
