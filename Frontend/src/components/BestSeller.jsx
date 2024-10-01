import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title, ProductItem } from "./index";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    //   console.log( typeof product)
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          deleniti quaerat suscipit unde ipsam esse beatae. Laboriosam,
          blanditiis dignissimos dicta, voluptatibus, earum nisi sit officiis
          odio nulla quis iste laborum.
        </p>
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
          lg:grid-cols-5 gap-4 gap-y-6"
      >
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
