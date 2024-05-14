import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AssignmentDetails = () => {
  const { _id } = useParams();
  const [assignmentDetails, setAssignmentDetails] = useState(null);

  useEffect(() => {
    // Fetch art details using the _id parameter
    fetch(`https://studysync-network.vercel.app/assignments/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignmentDetails(data);
      })
      .catch((error) =>
        console.error("Error fetching assignment details:", error)
      );
  }, [_id]);

  return (
    <div className="bg-cyan-100 py-6">
      <div className="max-w-7xl mx-auto text-xl">
        <img src="" alt="" />
        <h2 className="text-center font-bold text-5xl text-black rounded-xl py-4 mb-4">
          Assignment Details
        </h2>
        {assignmentDetails && (
          <div className="md:flex items-center gap-10">
            <div>
              <p className="p-4 text-4xl font-bold">
                {assignmentDetails.title}
              </p>
              <p className="p-4 text-2xl">
                Description: {assignmentDetails.description}
              </p>
              <div className="md:flex justify-between">
                <p className="p-4 text-2xl">
                  Difficulty Level:{" "}
                  <span className="text-red-500 font-bold">
                    {assignmentDetails.difficulty}
                  </span>
                </p>
                <p className="p-4 text-2xl">
                  Due Date:
                  <span className="text-blue-700 pl-2 font-bold">
                    {assignmentDetails.dueDate}
                  </span>
                </p>
              </div>
              <p className="p-4 text-2xl">
                Marks:
                <span className="text-orange-700 font-bold text-2xl px-2">
                  {assignmentDetails.marks}
                </span>
              </p>
            </div>
            <div className="avatar">
              <div className="w-96 rounded-full">
                <img src={assignmentDetails.photo} />
              </div>
            </div>
          </div>
        )}
        <div className="text-center py-4">
          <Link to={`/takeassignment/${_id}`}>
            <button className="btn bg-sky-500 border-2 p-4">
              Take Assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AssignmentDetails;
