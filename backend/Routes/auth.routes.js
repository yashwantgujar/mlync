import express from "express";
import { registerUser, login ,socialLogin} from "../Controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/social-login", socialLogin);
router.post("/login", login);

export default router;
