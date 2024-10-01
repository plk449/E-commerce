import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { ProductItem, Title } from "../components";

function Collection() {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("relavent");

  const togleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const togleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // search 
    if (search && showSearch)
    {
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productsCopy);
    // console.log("apply Filter", filterProduct);
  };

  // useEffect(() => {
  //   setFilterProduct(products);
  // }, []);

  const sortProducts = () => {
    let filterProductCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch,products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2 
        "
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* category */}
        <div
          className={`border border-gray-300 pl-5 py-3 sm:block mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CAREGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Men"}
                onChange={togleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Women"}
                onChange={togleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Kids"}
                onChange={togleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* subCategory */}
        <div
          className={`border sm:block border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Topwear"}
                onChange={togleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Bottomwear"}
                onChange={togleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Winterwear"}
                onChange={togleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side  */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low-High</option>
            <option value="high-low">Sort by:High-Low</option>
          </select>
        </div>
        {/* product  */}

        <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, index) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default Collection;
