import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { createDeal } from "../controllers/dealController.js";

const dealRouter = express.Router();

dealRouter.post("/create-deal", authMiddleware, createDeal);
export default dealRouter;
