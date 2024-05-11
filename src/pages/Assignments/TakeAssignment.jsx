import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

function TakeAssignment() {
  const { user, displayName } = useContext(AuthContext);
  const { _id } = useParams();
  const [assignments, setAssignments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dueDate, setDueDate] = useState(new Date());

  useEffect(() => {
    // Fetch art details using the _id parameter
    setLoading(true);
    fetch(`http://localhost:3000/assignments/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching art details:", error));
  }, [_id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const documentLink = form.documentLink.value;
    const note = form.note.value;
    const title = form.title.value;

    const submittedAssignment = {
      documentLink,
      note,
      email,
      title,
      description: assignments.description,
      marks: assignments.marks,
      dueDate: assignments.dueDate,
      difficulty: assignments.difficulty,
      status: "pending",
      obtained_marks: "",
    };
    console.log(submittedAssignment);

    //send data to server
    fetch(`http://localhost:3000/assignments/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Submitted!", "Your Assignments is Submitted!", "success");
        }
      });
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
                      className="border border-slate-400 w-full py-2 px-4 mt-4"
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

                <div className="bg-blue-600 px-10 py-2 rounded-2xl mb-6">
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
                  className="btn p-4 mb-3 bg-green-500 w-full"
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
