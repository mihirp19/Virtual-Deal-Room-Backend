import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "../utils/token.js";

export const registerUser = async (userData) => {
  const { email } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const newUser = new User(userData);
  const savedUser = await newUser.save();

  return {
    user: {
      id: savedUser._id,
      firstName: savedUser.first_name,
      lastName: savedUser.last_name,
      email: savedUser.email,
    },
  };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or Password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or Password");
  }
  const token = generateAccessToken({
    id: user._id.toString(),
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
  });
  return { token };
};
