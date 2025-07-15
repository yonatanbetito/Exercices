import express from "express";
import { getProductsController } from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getProductsController);

export default router;
