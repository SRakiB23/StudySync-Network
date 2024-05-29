import React from "react";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import Blogs from "../../components/Blogs/Blogs";

function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedSection></FeaturedSection>
      <Faq></Faq>
      <Blogs></Blogs>
    </div>
  );
}

export default HomePage;
