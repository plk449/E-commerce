import express from "express";
import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cart.controllers.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.route("/get").post(authUser, getUserCart);
cartRouter.route("/add").post(authUser, addToCart);
cartRouter.route("/update").post(authUser, updateCart);

export default cartRouter;
