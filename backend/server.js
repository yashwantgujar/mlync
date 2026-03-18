import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./Config/db.js";
import indexRoutes from "./Routes/index.routes.js";
import { errorHandler } from "./Middleware/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", indexRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`  running on port ${PORT}`);
});