import express from "express";
import { getProductsController } from "../controllers/productsController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateUser, getProductsController);

export default router;
