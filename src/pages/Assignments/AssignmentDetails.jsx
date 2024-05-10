import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AssignmentDetails = () => {
  const { _id } = useParams();
  const [assignmentDetails, setAssignmentDetails] = useState(null);

  useEffect(() => {
    // Fetch art details using the _id parameter
    fetch(`http://localhost:3000/assignments/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignmentDetails(data);
      })
      .catch((error) => console.error("Error fetching art details:", error));
  }, [_id]);

  return (
    <div
      className="bg-cover bg-center min-h-screen max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 opacity-90"
      style={{
        backgroundImage: "url('https://i.ibb.co/vzxmSkx/wave-haikei.png')",
      }}
    >
      <div className="max-w-7xl mx-auto text-white text-xl">
        <img src="" alt="" />
        <h2 className="text-center font-bold text-5xl text-black bg-green-500 rounded-xl py-8 mb-4">
          Assignment Details
        </h2>
        {assignmentDetails && (
          <div className="grid md:grid-cols-2 gap-10">
            <div className="md:w-96 flex items-center">
              <img src={assignmentDetails.photo} alt="" className="mx-auto" />
            </div>
            <div>
              <p className="p-4 text-4xl font-bold">
                {assignmentDetails.title}
              </p>
              <p className="p-4 text-2xl">${assignmentDetails.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentDetails;
