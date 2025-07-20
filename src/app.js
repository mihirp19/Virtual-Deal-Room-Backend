import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);

export default app;
