import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentsCard from "./AssignmentsCard";
import { IoIosArrowDropdown } from "react-icons/io";

function Assignments() {
  const loadedAssignements = useLoaderData();
  const [sort, setSort] = useState("");
  const handleSort = (value) => {
    setSort(value);
  };

  const [assignments, setAssignments] = useState(loadedAssignements);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <h1 className="text-center font-bold text-3xl py-6">Assignment</h1>
        <div className="text-center py-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-yellow-400">
              Sort By Difficulty <IoIosArrowDropdown className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => handleSort("easy")}>Easy</a>
              </li>
              <li>
                <a onClick={() => handleSort("medium")}>Medium</a>
              </li>
              <li>
                <a onClick={() => handleSort("hard")}>Hard</a>
              </li>
              <li>
                <a onClick={() => handleSort("")}>All</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-5 lg:grid-cols-3">
          {sort
            ? assignments
                .filter(
                  (assignments) => assignments.difficulty.toLowerCase() === sort
                )
                .map((assignment) => (
                  <AssignmentsCard
                    key={assignment._id}
                    assignment={assignment}
                    assignments={assignments}
                    setAssignments={setAssignments}
                  ></AssignmentsCard>
                ))
            : assignments.map((assignment) => (
                <AssignmentsCard
                  key={assignment._id}
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
