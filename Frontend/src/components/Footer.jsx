import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w32" src={assets.logo} alt="" />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quo
            vitae vel doloribus quaerat ipsa, doloremque praesentium iste
            consequuntur minima minus, corrupti voluptatum blanditiis eos sit
            voluptas ullam reiciendis nisi.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delevery</li>
            <li>Privacy Policy</li>
          </ul>
              </div>
              <div>
                  
        <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+1-154-486-4895</li>
          <li>contact@foreveryou.com</li>
        </ul>
              </div>
          </div>
          <div>
              <hr />
              <p className="py-5 text-sm text-center">
                  Copyright 2024@ forever.com - All Right Reserved
              </p>
          </div>
    </div>
  );
}

export default Footer;
