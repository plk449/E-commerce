import { StrictMode } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // BrowserRouter,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  About,
  Cart,
  Collection,
  Contact,
  Home,
  Login,
  Orders,
  PlaceOrder,
  Product,
} from "./pages/index.js";

import Layout from "./Layout.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Collection",
        element: <Collection />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Orders",
        element: <Orders />,
      },
      {
        path: "/PlaceOrder",
        element: <PlaceOrder />,
      },
      {
        path: "/Product/:productId",
        element: <Product />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </div>
  </StrictMode>
);
