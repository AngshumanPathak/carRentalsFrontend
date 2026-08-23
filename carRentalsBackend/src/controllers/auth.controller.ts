import { Request, Response } from "express";
import {
  loginUser,
  registerUser,
} from "../services/auth.service.js";


export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "Name, email, phone and password are required",
      });
    }

    const result = await registerUser({
      name,
      email,
      phone,
      password,
    });

    return res.status(201).json({
      message: "Registration successful",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
};

export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const result = await loginUser({
      email,
      password,
    });

    return res.status(200).json({
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(401).json({
      message:
        error instanceof Error
          ? error.message
          : "Login failed",
    });
  }
};

