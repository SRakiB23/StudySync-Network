import React from "react";

function AssignmentsCard({ assignment }) {
  const { title, photo, description } = assignment;
  return (
    <div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentsCard;
