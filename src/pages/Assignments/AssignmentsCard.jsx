import React, { useContext } from "react";
import { DiVim } from "react-icons/di";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

function AssignmentsCard({ assignment, assignments, setAssignments }) {
  const { user, displayName } = useContext(AuthContext);

  const { title, photo, description, difficulty, dueDate, _id, email } =
    assignment;

  const handleDelete = (_id) => {
    if (user.email === email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://studysync-network.vercel.app/assignments/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your Arts Has Been Deleted", "Success");
                const remaining = assignments.filter(
                  (assignment) => assignment._id !== _id
                );
                setAssignments(remaining);
              }
            });
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Authorized to Delete this Assignment!",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok!!",
      });
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className="card card-compact bg-slate-50">
            <figure className="h-60 py-2">
              <img src={photo} alt="home" />
            </figure>
            <div className="card-body h-72 w-full">
              <h2 className="card-title font-bold">{title}</h2>
              <div></div>
              <hr />
              <p>
                <span className="font-bold">Description:</span> {description}
              </p>
              <p>
                <span className="font-bold">Difficulty:</span>
                <span className="text-red-500 text-lg pl-2">{difficulty}</span>
              </p>
              <div className="flex justify-between py-4">
                <div className="card-actions justify-center">
                  <Link to={`/assignmentdetails/${_id}`}>
                    {
                      <button className="btn bg-purple-300 text-lg">
                        View
                      </button>
                    }
                  </Link>
                </div>
                <div className="card-actions justify-center">
                  <Link to={`/updateassignment/${assignment._id}`}>
                    {
                      <button className="btn bg-blue-300 text-lg">
                        Update
                      </button>
                    }
                  </Link>
                </div>
                <div className="card-actions justify-center">
                  {
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn bg-red-400 text-lg"
                    >
                      Delete
                    </button>
                  }
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
