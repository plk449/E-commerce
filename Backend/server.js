import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";

//Add config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
//app.use(cors());
app.use(cors({
    origin: "https://e-commerce-admin-olive-two.vercel.app/",
    
    // Allow this origin
    // origin:"https://library-frontend-smoky.vercel.app/",
    methods: "GET,POST,PATCH,DELETE",
    credentials: true // Allow cookies and credentials
}));

// api end point

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log("Server runing on :" + port);
});
