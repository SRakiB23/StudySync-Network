import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function PendingAssignmentMarking() {
  const { user, displayName } = useContext(AuthContext);
  const { _id } = useParams();
  const [assignments, setAssignments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch details using the _id parameter
    setLoading(true);
    fetch(`https://studysync-network.vercel.app/submitassignments/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching Assignment details:", error)
      );
  }, [_id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const obtained_marks = form.obtained_marks.value;
    const feedback = form.feedback.value;

    const pendingAssingmentMarking = {
      documentLink: assignments.documentLink,
      note: assignments.note,
      email: user.email,
      title: assignments.title,
      photo: assignments.photo,
      feedback,
      obtained_marks,
      description: assignments.description,
      marks: assignments.marks,
      dueDate: assignments.dueDate,
      difficulty: assignments.difficulty,
      status: "completed",
      submitted_by: user.email,
    };
    // console.log(pendingAssingmentMarking);

    if (user.email === assignments.submitted_by) {
      Swal.fire({
        title: "You Can Not Mark your Submitted Assignment!!!!",
        icon: "error",
        confirmButtonText: "Oh! Okay",
      }).then(() => {
        window.location.href = "/";
      });
    } else {
      fetch(`https://studysync-network.vercel.app/submitassignments/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(pendingAssingmentMarking),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire(
              "Marked!!",
              "You Have Marked the Assignment!",
              "success"
            ).then(() => {
              window.location.href = "/";
            });
          }
        });
    }

    //send data to server
  };

  return (
    <div className="bg-gradient-to-r from-cyan-800 to-cyan-100 ...">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-bold text-4xl py-8">
          Assignment Marking
        </h2>
        <div className="md:flex justify-between mb-8">
          <div className="p-10 bg-blue-200 rounded-lg">
            <p className="pb-4">
              Assignment Title:
              <span className="font-bold pl-10">{assignments?.title}</span>
            </p>
            <p className="pb-4">
              Pdf/Doc Link:
              <span className="font-bold ml-16 border bg-slate-400 p-2">
                {assignments?.documentLink}
              </span>
              {assignments?.documentLink && (
                <iframe
                  title="Document"
                  src={assignments?.documentLink}
                  className="mt-2 w-full h-64"
                />
              )}
            </p>
            <p className="pb-4">
              Assingment Mark:
              <span className="font-bold pl-8">{assignments?.marks}</span>
            </p>
            <p className="text-2xl">Note:</p>
            <div className="mb-6">
              <br />
              <textarea
                className="border border-slate-500 w-full mt-2 p-4"
                id="note"
                name="note"
                placeholder="note"
                disabled
                defaultValue={assignments?.note}
                rows="4"
                cols="50"
              ></textarea>
              <br />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-cyan-600 p-4 rounded-xl">
              <div className="mb-6">
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text text-xl">Marks:</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      required
                      name="obtained_marks"
                      placeholder="Input Obtained Marks"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <label className="text-2xl" htmlFor="note">
                  Feedback:
                </label>
                <br />
                <textarea
                  className="border border-slate-400 w-full mt-2 p-4"
                  id="note"
                  required
                  name="feedback"
                  placeholder="Feedback"
                  rows="4"
                  cols="50"
                ></textarea>
                <br />
              </div>
            </div>
            <input
              className="btn p-4 mt-10 font-bold bg-amber-400 w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default PendingAssignmentMarking;
