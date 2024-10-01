import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductItem, Title } from "./index";

function RelatedProduct({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();

      productCopy = productCopy.filter(
        (item) => category === item.category && subCategory === item.subCategory
      );

      setRelated(productCopy.slice(0, 10));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div
        className="text-center text-3xl py-2 
        "
      >
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  lg:grid-cols-5 gap-4 gap-y-6
        "
      >
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      p
    </div>
  );
}

export default RelatedProduct;
