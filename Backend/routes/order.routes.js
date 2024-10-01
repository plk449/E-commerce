import express from "express";
import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  updateStatus,
  userOrders,
} from "../controllers/order.controller.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// admin
orderRouter.route("/list").post(adminAuth, allOrders);
orderRouter.route("/status").post(adminAuth, updateStatus);

// pament
orderRouter.route("/place").post(authUser, placeOrder);
orderRouter.route("/stripe").post(authUser, placeOrderStripe);
orderRouter.route("/razerpay").post(authUser, placeOrderRazorpay);

// user feature
orderRouter.route("/userorders").post(authUser, userOrders);

export default orderRouter;
