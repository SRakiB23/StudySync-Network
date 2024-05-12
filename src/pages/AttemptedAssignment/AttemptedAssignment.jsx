import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AttemptedAssignment = () => {
  //   const { obtained_marks, email } = useParams();
  const [loading, setLoading] = useState(true);

  const { user, displayName } = useContext(AuthContext);
  const email = user?.email;

  const [assignmentDetails, setAssignmentDetails] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/assignments/submitted_by/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignmentDetails(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching assignement details:", error)
      );
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-4xl py-4">
          Assignment Details
        </h2>
      </div>
      <div className="hero bg-base-200 py-5 text-lg md:py-20">
        {/* Render assignment details */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {assignmentDetails && assignmentDetails.length > 0 ? (
              assignmentDetails.map((assignment) => (
                <div
                  key={assignment?._id}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold">
                    Title:<span className="font-bold">{assignment?.title}</span>
                  </h3>
                  <p className="mt-2">
                    Status:
                    <span className="text-red-500 font-bold pl-1">
                      {assignment?.status}
                    </span>
                  </p>
                  <p className="mt-2">
                    Assignment Marks: <span>{assignment?.marks}</span>
                  </p>
                  <p className="mt-2">
                    Obtained Marks: <span>{assignment?.obtained_marks}</span>
                  </p>
                  <p className="mt-2">
                    Feedback: <span>{assignment?.feedback}</span>
                  </p>
                  {/* Render documentLink in an iframe */}
                  {assignment.documentLink && (
                    <iframe
                      title="Document"
                      src={assignment?.documentLink}
                      className="mt-2 w-full h-80"
                    />
                  )}
                </div>
              ))
            ) : (
              <p>No Assignment Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttemptedAssignment;
