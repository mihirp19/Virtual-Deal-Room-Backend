import { registerUser, loginUser } from "../services/authService.js";

export async function register(req, res) {
  try {
    const { first_name, last_name, email, password } = req.body;
    const userData = await registerUser({
      first_name,
      last_name,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: userData,
    });
  } catch (error) {
    console.error("Register Error: ", error);
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const loginData = await loginUser(email, password);
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: loginData.token,
    });
  } catch (error) {
    console.error("Login Error: ", error);
  }
}
