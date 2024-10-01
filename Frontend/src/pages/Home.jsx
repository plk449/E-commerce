import React from "react";
import {
  Hero,
  LatestCollection,
  BestSeller,
  OurPolicy,
  NewsLeterBox,
} from "../components/index";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLeterBox />
    </div>
  );
}

export default Home;
