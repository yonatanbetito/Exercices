import express from "express";
import authRoutes from "./routes/authRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/login", authRoutes);
app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
