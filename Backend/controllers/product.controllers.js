// import { json } from "express";
import productModel from "../models/product.models.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item != undefined
    );

    //uploading image in db through cloudinary
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    // console.log(bestseller);

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestSeller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.status(201).json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      seccuss: false,
      message: error.message,
    });
  }
};

const listProduct = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.status(201).json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.status(201).json({
      seccuss: false,
      message: error.message,
    });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.status(201).json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      seccuss: false,
      message: error.message,
    });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.status(201).json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      seccuss: false,
      message: error.message,
    });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
