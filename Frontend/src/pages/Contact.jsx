import React from "react";
import { NewsLeterBox, Title } from "../components/index";
import { assets } from "../assets/frontend_assets/assets";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="font-semibold text-xl to-gray-600">Our Store</p>
          <p className="text-gray-500">
            784596 Jalpaiguri
            <br /> West Bengle{" "}
          </p>
          <p className="text-gray-500">
            Tel: (91) 154-486-4895
            <br />
            contact@foreveryou.com
          </p>
          <p className="text-gray-500 font-semibold text-xl">
            {" "}
            Careers at Forever
          </p>
          <p className="text-gray-500">Learn more about us.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLeterBox />
    </div>
  );
}

export default Contact;
