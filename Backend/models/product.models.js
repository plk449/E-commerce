import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,

      required: true,
    },

    image: {
      type: Array,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
    bestSeller: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
// export default mongoose.model("Product", productSchema);

const productModel =
  mongoose.model.product || mongoose.model("Product", productSchema);

export default productModel;