import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext();

import { toast } from "react-toastify";

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState("");
  // const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
    // console.log(cartItem);

    if (token) {
      try {
        const response=await axios.post(backendUrl+"/api/cart/add",{itemId,size},{headers:{token}})
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }


  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItem) {
      for (const items in cartItem[item]) {
        try {
          // console.log(cartItem[item][items])
          if (cartItem[item][items] > 0) {
            totalCount += cartItem[item][items];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);


    if (token) {
      try {
        const response=await axios.post(backendUrl+"/api/cart/update",{itemId,size,quantity},{headers:{token}})
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const getProductData = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/product/list"
      );
      if (response.data.success) {
        // console.log(response.data.product);

        setProducts(response.data.product);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //updating cart data from backend
  const getUserCart = async (token) => {
    try {
      
      const response = await axios.post(backendUrl + "/api/cart/get", {}, { headers: { token } })
      if (response.data.success) {
        setCartItem(response.data.cartData)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"))
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    setCartItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    backendUrl,
    token,
    setToken,
    // navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
