import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PendingAssignmentRow from "./PendingAssignmentRow";

const PendingAssignment = () => {
  const { obtained_marks } = useParams();

  const [assignmentDetails, setAssignmentDetails] = useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:3000/submitassignments/obtained_marks/${obtained_marks}`
    )
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
    <div className="bg-sky-200">
      <h2 className="text-3xl font-bold text-center py-5">
        Pending Assignments
      </h2>
      <div className="overflow-x-auto w-full max-w-7xl mx-auto py-10">
        {assignmentDetails && assignmentDetails.length > 0 ? (
          <table className="table w-full">
            <thead className="bg-slate-200">
              <tr className="font-bold text-2xl border border-black">
                <th>Assignment Title</th>
                <th>Assignment marks</th>
                <th>Examinee Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {assignmentDetails.map((assignment) => (
                <PendingAssignmentRow
                  key={assignment._id}
                  assignment={assignment}
                ></PendingAssignmentRow>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No pending assignments</p>
        )}
      </div>
    </div>
  );
};

export default PendingAssignment;
