import mongoose, { model } from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["open", "in-progress", "closed"],
      default: "open",
    },
    createdBy: { type: mongoose.Schema.ObjectId, required: true, ref: "User" },
    participants: { type: mongoose.Schema.ObjectId, ref: "User" },
    documents: [{ type: String }],
  },
  { timestamps: true }
);

export default model("Deal", dealSchema);
