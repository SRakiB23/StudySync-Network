import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentsCard from "./AssignmentsCard";

function Assignments() {
  const loadedAssignements = useLoaderData();

  const [assignments, setAssignments] = useState(loadedAssignements);
  console.log(assignments);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <h1 className="text-center font-bold text-3xl py-6">Assignment</h1>
        <div className="md:grid grid-cols-2 gap-5 lg:grid-cols-3">
          {assignments.map((assignment) => (
            <AssignmentsCard
              assignment={assignment}
              assignments={assignments}
              setAssignments={setAssignments}
            ></AssignmentsCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assignments;
