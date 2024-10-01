import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";
const placeOrder = async (req, res) => {
  try {
    const { userId, item, amount, address } = req.body;

    const orderData = {
      userId,
      item,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const placeOrderStripe = async (req, res) => {
  try {
  } catch (error) {}
};
const placeOrderRazorpay = async (req, res) => {
  try {
  } catch (error) {}
};
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body
    await orderModel.findByIdAndUpdate(orderId, { status })
    
    res.json({success:true,message:'Status Updated'})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
  }
};

export {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  updateStatus,
  userOrders,
};
