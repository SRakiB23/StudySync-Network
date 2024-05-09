import React from "react";

function Banner() {
  return (
    <div className="bg-[#9bcbc1] md:h-96 flex">
      <div className="md:flex gap-28 items-center align-middle max-w-7xl mx-auto px-12">
        <div className="md:w-full">
          <h2 className="text-blue-600">Online Group Study</h2>
          <h2 className="text-4xl font bold">
            Get Started Your <br /> Online Assesment!
          </h2>
          <p>
            Create a collaborative online group study platform where users can
            <br />
            seamlessly connect with friends to collaborate on assignments, track
            <br />
            progress, and provide feedback.
          </p>
          <div className="md:flex font-bold gap-10">
            <p>Create Assignment!</p>
            <p>Get Marked!</p>
            <p>Become a Hero!</p>
          </div>
        </div>
        <div>
          <div className="md:w-full">
            <img src="https://i.ibb.co/0stKT05/Study-Group-web.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
