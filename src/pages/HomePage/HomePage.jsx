import React from "react";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";

function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedSection></FeaturedSection>
      <Faq></Faq>
    </div>
  );
}

export default HomePage;
