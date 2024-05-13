import React from "react";
import { FaCalendar } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";

function FeaturedSectionCard({
  assignment,
  assignmentDetails,
  setAssignmentDetails,
}) {
  const { image, category, title, rating, publishedDate, description } =
    assignment;

  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl hover:bg-green-100">
          <figure className="px-10 pt-10">
            <img src={image} alt="image" className="rounded-xl h-52" />
          </figure>
          <div className="card-body">
            <button className="bg-green-400 rounded-xl p-1 w-1/2">
              #{category}
            </button>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p className="flex items-center gap-2">
              <FcRating className="text-xl" /> {rating}
            </p>
            <p className="flex items-center gap-2">
              <FaCalendar /> {publishedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSectionCard;
