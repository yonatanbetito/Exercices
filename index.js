import express from "express";
import { config } from "dotenv";
import routsinit from "./routers/router.js";
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
routsinit(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
