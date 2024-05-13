import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

function UpdateAssignment() {
  const { _id } = useParams();
  const [assignments, setAssignments] = useState(null);
  const [dueDate, setDueDate] = useState(new Date());

  const [loading, setLoading] = useState(true);

  const handleDateChange = (date) => {
    setDueDate(date);
  };

  useEffect(() => {
    // Fetch art details using the _id parameter
    setLoading(true);
    fetch(`https://studysync-network.vercel.app/assignments/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
        setDueDate(new Date(data.dueDate));
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching art details:", error));
  }, [_id]);

  const handleUpdateAssignment = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const dueDate = form.dueDate.value;
    const difficulty = form.difficulty.value;
    const photo = form.photo.value;

    const updateAssignment = {
      name,
      title,
      description,
      marks,
      dueDate,
      difficulty,
      photo,
    };
    // console.log(updateAssignment);

    fetch(`https://studysync-network.vercel.app/assignments/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your Assignments Has Been Updated", "success");
        }
      });
  };

  return (
    <div>
      <div>
        <div
          className="bg-cover bg-center min-h-screen max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/LYDnmF5/blob-scene-haikei.png')",
          }}
        >
          <div className="px-20 py-10 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white pb-10">
              Update Assignment
            </h2>
            <form onSubmit={handleUpdateAssignment}>
              {/*form row for title*/}
              <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text text-white">Title</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      defaultValue={assignments?.title}
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
              </div>
              {/*form row for description*/}
              <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text text-white">Description</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      defaultValue={assignments?.description}
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
              </div>
              {/*form row for Marks and date*/}
              <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-white">Marks</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="marks"
                      placeholder="Marks"
                      defaultValue={assignments?.marks}
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-white">Due Date</span>
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={dueDate}
                        onChange={handleDateChange}
                        placeholderText="Due Date"
                        name="dueDate"
                        className="input input-bordered pl-12"
                      />
                      <FaCalendarAlt className="absolute top-1 left-0 mt-3 ml-3 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
              {/*form row for defficulty level*/}
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-white">
                    Difficulty Level
                  </span>
                </label>
                <label className="select">
                  <select
                    name="difficulty"
                    value={assignments?.difficulty || ""}
                    onChange={(e) =>
                      setAssignments({
                        ...assignments,
                        difficulty: e.target.value,
                      })
                    }
                    className="w-full"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </label>
              </div>

              {/*photoUrl*/}
              <div className="form-control w-full mb-6">
                <label className="label ">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="PhotoURL"
                    defaultValue={assignments?.photo}
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>

              <input
                type="submit"
                value="Update Assignment"
                className="bg-[#44d498] text-black btn btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateAssignment;
