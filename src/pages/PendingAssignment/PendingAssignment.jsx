import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PendingAssignmentRow from "./PendingAssignmentRow";
import { MdPending } from "react-icons/md";

const PendingAssignment = () => {
  const { obtained_marks } = useParams();
  const [loading, setLoading] = useState(true);

  const [assignmentDetails, setAssignmentDetails] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://studysync-network.vercel.app/submitassignments/obtained_marks/${obtained_marks}`,
      { credentials: "include" }
    )
      .then((response) => response.json())
      .then((data) => {
        setAssignmentDetails(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching assignement details:", error)
      );
  }, []);

  {
    loading ? <span className="loading loading-spinner loading-lg"></span> : "";
  }

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
          ""
        )}
      </div>
    </div>
  );
};

export default PendingAssignment;
