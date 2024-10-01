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
// app.use(cors());
// app.use(cors({
//   origin: '*',
//   methods: ['GET','POST',  'DELETE'],
  
//   credentials: true
// }));

const allowedOrigins = ['https://e-commerce-frontend-henna-two.vercel.app', 'https://e-commerce-admin-olive-two.vercel.app'];


app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      // Origin is allowed
      callback(null, true);
    } else {
      // Origin is not allowed
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods here
  credentials: true// If you need to allow cookies or credentials
 
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
