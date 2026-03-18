import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ApiError } from "../Utils/apiError.js";
import { STATUS_CODES, MESSAGES } from "../Utils/status.codes.messages.js";

export const registerUser = async (req, res, next) => {
  try {

    const { name, email, password } = req.body;

           const existingUser = await User.findOne({ email });

        if (existingUser) {
                            throw new ApiError(
        STATUS_CODES.CONFLICT,
        MESSAGES.EMAIL_ALREADY_EXISTS
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

          const user = await User.create({
      name,
        email,
      password: hashedPassword
    });

    res.status(STATUS_CODES.CREATED).json({
      success: true,
            message: MESSAGES.REGISTRATION_SUCCESS,
      data: {
        id: user._id,
        email: user.email
          }
    });

  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
                throw new ApiError(
        STATUS_CODES.UNAUTHORIZED,
        MESSAGES.INVALID_CREDENTIALS
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
            throw new ApiError(
        STATUS_CODES.UNAUTHORIZED,
        MESSAGES.INVALID_CREDENTIALS
      );
    }

    const token = jwt.sign(
      { userId: user._id },
            process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.status(STATUS_CODES.SUCCESS).json({
      success: true,
      message: MESSAGES.LOGIN_SUCCESS,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    next(error);
  }
};

export const socialLogin = async (req, res, next) => {
  try {
    const { name, email, authProvider } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
 
      user = await User.create({
        name,
        email,
        authProvider 
      });
    }

   
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.status(STATUS_CODES.SUCCESS).json({
      success: true,
      message: "Social Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
};
