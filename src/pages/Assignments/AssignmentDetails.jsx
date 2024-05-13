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
    <div className="bg-sky-200">
      <div className="max-w-7xl mx-auto text-xl">
        <img src="" alt="" />
        <h2 className="text-center font-bold text-5xl text-black bg-red-400 rounded-xl py-4 mb-4">
          Assignment Details
        </h2>
        {assignmentDetails && (
          <div className="">
            <div className="md:w-[350px] h-1/2 mx-auto flex items-center">
              <img src={assignmentDetails.photo} alt="" className="mx-auto" />
            </div>
            <div>
              <p className="p-4 text-4xl font-bold text-center">
                {assignmentDetails.title}
              </p>
              <p className="p-4 text-2xl border border-black">
                Description: {assignmentDetails.description}
              </p>
              <div className="md:flex justify-between border border-black">
                <p className="p-4 text-2xl">
                  Difficulty Level:{" "}
                  <span className="text-red-500 font-bold">
                    {assignmentDetails.difficulty}
                  </span>
                </p>
                <p className="p-4 text-2xl">
                  Due Date:
                  <span className="text-red-500 font-bold">
                    {assignmentDetails.dueDate}
                  </span>
                </p>
              </div>
              <p className="p-4 text-2xl border border-black">
                Marks:
                <span className="text-red-500 font-bold text-2xl px-2">
                  {assignmentDetails.marks}
                </span>
              </p>

              <div className="text-center py-4">
                <Link to={`/takeassignment/${_id}`}>
                  <button className="btn bg-green-500 p-4">
                    Take Assignment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default AssignmentDetails;
