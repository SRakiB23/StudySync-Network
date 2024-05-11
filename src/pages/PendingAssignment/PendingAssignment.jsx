import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PendingAssignment = () => {
  const { obtained_marks } = useParams();

  const [assignmentDetails, setAssignmentDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/assignments/obtained_marks/${obtained_marks}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignmentDetails(data);
        console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching assignement details:", error)
      );
  }, []);

  return (
    <div>
      PendingAssignment
      {assignmentDetails && (
        <div>
          <p className="p-4 text-4xl font-bold text-center">
            {assignmentDetails.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default PendingAssignment;
