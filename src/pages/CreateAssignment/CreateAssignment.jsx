import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Typewriter } from "react-simple-typewriter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";

function CreateAssignment() {
  const { user, displayName } = useContext(AuthContext);
  const [dueDate, setDueDate] = useState(null);

  const handleDateChange = (date) => {
    setDueDate(date);
  };
  const handleAddAssignement = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const dueDate = form.dueDate.value;
    const difficulty = form.difficulty.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const name = form.name.value;

    const newAssignment = {
      name,
      title,
      description,
      marks,
      dueDate,
      difficulty,
      photo,
      email,
    };
    // console.log(newAssignment);

    //send data to server
    fetch("https://studysync-network.vercel.app/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Assignment Created Successfully",
            icon: "success",
            confirmButtonText: "Ok!",
          }).then(() => {
            window.location.href = "/assignments";
          });
        }
      });
  };

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen mx-auto px-4 py-8 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/LYDnmF5/blob-scene-haikei.png')",
        }}
      >
        <div>
          <div className="px-20 py-10 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white pb-10">
              Create Assignment
            </h2>
            <form onSubmit={handleAddAssignement}>
              {/*form row for title*/}
              <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text text-white">Title</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      required
                      name="title"
                      placeholder="Title"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
              </div>
              {/*form row for description*/}
              <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text text-white">
                      Short Description
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
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
                      type="number"
                      name="marks"
                      placeholder="Marks"
                      required
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
                        name="dueDate"
                        required
                        onChange={handleDateChange}
                        placeholderText="Due Date"
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
                    Defficulty Level
                  </span>
                </label>
                <label className="select">
                  <select name="difficulty" className="w-full">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </label>
              </div>
              {/*photoUrl*/}
              <div className="form-control w-full mb-6">
                <label className="label ">
                  <span className="label-text text-white">
                    Thumbnail Image URL
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="photo"
                    placeholder="PhotoURL"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
              {/*form row for UserName and UserEmail*/}
              <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-white">User Email</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="email"
                      value={user?.email ?? ""}
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-white">User Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      value={user?.displayName ?? ""}
                      // placeholder="User Name"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Add Assignment"
                className="bg-[#4decaa] text-black btn btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAssignment;
