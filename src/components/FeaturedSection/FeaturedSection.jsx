import React, { useState, useEffect } from "react";
import FeaturedSectionCard from "./FeaturedSectionCard";
import { useParams } from "react-router-dom";

const FeaturedSection = () => {
  const [loading, setLoading] = useState(true);

  const [assignmentDetails, setAssignmentDetails] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://studysync-network.vercel.app/featuredassignments")
      .then((response) => response.json())
      .then((data) => {
        setAssignmentDetails(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching featured Assignment details:", error)
      );
  }, []);

  {
    loading ? <span className="loading loading-spinner loading-lg"></span> : "";
  }

  return (
    <div>
      <h2 className="text-center font-bold text-4xl py-4">-- Featured --</h2>
      <div className="sm:w-full md:grid grid-cols-2 gap-4 lg:grid-cols-3 max-w-7xl mx-auto">
        {assignmentDetails ? (
          assignmentDetails.map((assignment) => (
            <FeaturedSectionCard
              key={assignment._id}
              assignment={assignment}
              assignmentDetails={assignmentDetails}
              setAssignmentDetails={setAssignmentDetails}
            ></FeaturedSectionCard>
          ))
        ) : (
          <p>NO Featured Assignment</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedSection;
