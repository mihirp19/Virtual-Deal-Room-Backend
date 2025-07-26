import dealModel from "../models/Deals.js";

export const dealService = async (data, userId) => {
  const deal = new dealModel({
    title: data.title,
    description: data.description,
    status: data.status || "open",
    participants: data.participants,
    documents: data.documents || [],
    createdBy: userId,
  });
  const saveDeal = await deal.save();
  return saveDeal;
};
