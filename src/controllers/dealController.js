import { dealService } from "../services/dealService.js";

export const createDeal = async (req, res) => {
  try {
    const userId = req.token.id;
    const dealData = req.body;
    const deal = await dealService(dealData, userId);
    return res.status(201).json({ message: "Deal created successfully", deal });
  } catch (error) {
    console.error("Error creating deal:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
