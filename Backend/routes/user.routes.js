import express from "express";
import {
  loginUser,
  adminLogin,
  registerUser,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.route("/register").post(registerUser);
// router.post("/register",registerUser)
router.route("/login").post(loginUser);
router.route("/admin").post(adminLogin);

export default router;
