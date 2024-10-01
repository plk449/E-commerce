import React from "react";
import { NewsLeterBox, Title } from "../components/index";
import { assets } from "../assets/frontend_assets/assets";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            vero incidunt aliquam quis sint vitae fugit iste tempora, fuga
            voluptatibus, sapiente cumque quibusdam magnam exercitationem
            blanditiis ut repellat quasi et.
          </p>
          <p>
            {" "}
            vero incidunt aliquam quis sint vitae fugit iste tempora, fuga
            voluptatibus, sapiente cumque quibusdam magnam exercitationem
            blanditiis ut repellat quasi et.
          </p>
          <b className="text-gray-800">Out Mission</b>
          <p>
            {" "}
            aliquam quis sint vitae fugit iste tempora, fuga voluptatibus,
            sapiente cumque quibusdam magnam exercitationem blanditiis ut
            repellat quasi et.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:oy20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            asperiores blanditiis facilis expedita fuga dolorem laudantium.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:oy20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            asperiores blanditiis facilis expedita fuga dolorem laudantium.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:oy20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            asperiores blanditiis facilis expedita fuga dolorem laudantium.
          </p>
        </div>
      </div>
      <NewsLeterBox />
    </div>
  );
}

export default About;
