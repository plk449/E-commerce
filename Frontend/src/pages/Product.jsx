import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import {RelatedProduct} from "../components/index";

function Product() {
  const { productId } = useParams();

  const { products, currency,addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row   ">
        {/* product img  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row  w-[45%]">
          <div className="flex sm:flex-col w-[20%] overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal ">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 curser-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* product info  */}

        <div className="flex-1 w-[65%]">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_dull_icon} alt="" />
            <p>(123)</p>
          </div>
          <p className=" mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div
            className="flex flex-col gap-4 my-8
                  "
          >
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  className={`border py-2 px-4 bg-gray-100 ${
                    item == size ? "border-orange-500" : ""
                  }`}
                  key={index}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

                  <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
                  onClick={()=>addToCart(productData._id,size)}
                  >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 " />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
          </div>
          {/* discription and review  */}
          <div className="mt-20">
              <div className="flex ">
                  <b className="border px-5 text-sm py-3">Description</b>
                  <p className="border px-5 text-sm py-3">Review(122)</p>
              </div>
              <div className="flex flex-col gap-4 border p6 text-sm text-gray-500">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, numquam! Quos doloremque nemo sapiente adipisci quas earum qui porro? Dicta incidunt itaque ipsum sit odio nesciunt amet, dolorum iure laudantium?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum voluptatibus iste dolorem quaerat dolorum debitis nesciunt! Possimus, molestias quaerat sit exercitationem quia maxime consectetur, hic, suscipit distinctio inventore vitae.</p>
              </div>
          </div>

          {/* display related product  */}
          <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;


