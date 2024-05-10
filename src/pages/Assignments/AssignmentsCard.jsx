import React from "react";
import { DiVim } from "react-icons/di";
import { Link } from "react-router-dom";

function AssignmentsCard({ assignment }) {
  const { title, photo, description, difficulty, dueDate, _id } = assignment;
  return (
    <div>
      <div>
        <div>
          <div className="card card-compact bg-slate-50">
            <figure className="h-64 p-2">
              <img src={photo} alt="home" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{title}</h2>
              <div></div>
              <hr />
              <p>Description: {description}</p>
              <p>Difficulty: {difficulty}</p>
              <p>Due Date: {dueDate}</p>
              <div className="flex justify-between py-4">
                <div className="card-actions justify-center">
                  <Link to={`/assignmentdetails/${_id}`}>
                    {
                      <button className="btn bg-yellow-400 text-lg">
                        View
                      </button>
                    }
                  </Link>
                </div>
                <div className="card-actions justify-center">
                  {<button className="btn bg-green-600 text-lg">Update</button>}
                </div>
                <div className="card-actions justify-center">
                  {<button className="btn bg-red-500 text-lg">Delete</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentsCard;
