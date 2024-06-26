import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function TakeAssignment() {
  const { user, displayName } = useContext(AuthContext);
  const { _id } = useParams();
  const [assignments, setAssignments] = useState(null);
  const [submitassignments, setsubmitAssignments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch details using the _id parameter
    setLoading(true);
    fetch(`https://studysync-network.vercel.app/assignments/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
        // console.log(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching Assignment details:", error)
      );
    //fetching second data
    fetch("https://studysync-network.vercel.app/submitassignments")
      .then((res) => res.json())
      .then((data) => {
        setsubmitAssignments(data);
      })
      .catch((error) =>
        console.error("Error fetching submitAssignment details:", error)
      );
  }, [_id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const documentLink = form.documentLink.value;
    const note = form.note.value;
    const title = form.title.value;

    for (const assignment of submitassignments) {
      if (assignment.email === user.email) {
        Swal.fire({
          title: "Assignment Already Submitted!!",
          icon: "error",
          confirmButtonText: "Ok!",
        });
        return;
      }
    }

    const submittedAssignment = {
      documentLink,
      note,
      email,
      title,
      name: user.displayName,
      description: assignments.description,
      marks: assignments.marks,
      dueDate: assignments.dueDate,
      photo: assignments.photo,
      difficulty: assignments.difficulty,
      status: "pending",
      obtained_marks: "",
      submitted_by: user.email,
    };
    console.log(submittedAssignment);

    if (assignments?.email === user?.email) {
      Swal.fire({
        title: "Creator Can Not Submit Assignment!!!!",
        icon: "error",
        confirmButtonText: "Ok!! Sorry!!",
      }).then(() => {
        window.location.href = "/";
      });
    } else {
      //send data to server
      fetch("https://studysync-network.vercel.app/submitassignments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submittedAssignment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            console.log("hoise");
            Swal.fire({
              title: "Assignment Submitted Successfully",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              window.location.href = "/";
            });
          }
        });
    }
  };

  return (
    <div className="bg-slate-500">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h2 className="text-center font-bold text-3xl py-4">
            Assignment Submission
          </h2>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="md:grid grid-cols-2 gap-10">
                <div>
                  <div>
                    <label className="text-2xl font-bold" htmlFor="document">
                      Document Link (PDF/DOC):
                    </label>
                    <br />
                    <input
                      className="border border-slate-400 w-full rounded-xl py-2 px-4 mt-4"
                      type="text"
                      id="document"
                      name="documentLink"
                      placeholder="PDF/DOC URL"
                      required
                    />
                    <br />
                  </div>
                  <div className="py-8">
                    <label className="text-2xl" htmlFor="note">
                      Note:
                    </label>
                    <br />
                    <textarea
                      className="border border-slate-400 w-full mt-2 p-4"
                      id="note"
                      name="note"
                      placeholder="Quick Note"
                      rows="4"
                      cols="50"
                    ></textarea>
                    <br />
                  </div>
                </div>

                <div className="bg-cyan-600 px-10 py-2 rounded-2xl mb-6">
                  <div className="mb-6">
                    <div className="form-control md:w-full">
                      <label className="label">
                        <span className="label-text text-white">Title</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          disabled
                          name="title"
                          defaultValue={assignments?.title}
                          className="input input-bordered md:w-full"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="form-control md:w-full">
                      <label className="label">
                        <span className="label-text text-white">
                          Submitting By
                        </span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          disabled
                          name="email"
                          value={user?.email ?? ""}
                          className="input input-bordered md:w-full"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <input
                  className="btn p-4 mb-3 bg-amber-200 w-full"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeAssignment;
