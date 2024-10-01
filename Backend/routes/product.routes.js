import express from "express"

import { addProduct, listProduct, removeProduct, singleProduct } from "../controllers/product.controllers.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter=express.Router()

productRouter.route("/add").post(adminAuth,upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
]), addProduct);
productRouter.route("/remove").post(adminAuth,removeProduct);
productRouter.route("/single").post(singleProduct);
productRouter.route("/list").get(listProduct);

export default productRouter;