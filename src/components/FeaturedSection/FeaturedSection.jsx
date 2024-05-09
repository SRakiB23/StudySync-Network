import React, { useState, useEffect } from "react";
import FeaturedSectionCard from "./FeaturedSectionCard";

const FeaturedSection = () => {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    // Fetch data from featuredata.json file
    fetch("featuredata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to state
        setFeaturedData(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-2xl py-4">Featured</h2>
      <div className="sm:w-full md:grid grid-cols-2 gap-4 lg:grid-cols-3 max-w-7xl mx-auto">
        {featuredData.map((item, index) => (
          <FeaturedSectionCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
