import React from "react";
import { GiConcentricCrescents } from "react-icons/gi";
import { IoCreate } from "react-icons/io5";
import { RiBookMarkedFill } from "react-icons/ri";

function Banner() {
  return (
    <div className="bg-[#9bcbc1] md:h-96 flex">
      <div className="md:flex gap-28 items-center align-middle max-w-7xl mx-auto px-12">
        <div className="md:w-full">
          <h2 className="text-blue-600 text-lg font-bold">
            Online Group Study
          </h2>
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
          <div className="md:flex font-bold gap-10 pt-5">
            <p className="flex items-center gap-2">
              <IoCreate className="text-2xl text-blue-600" /> Create Assignment!
            </p>
            <p className="flex items-center gap-2">
              <RiBookMarkedFill className="text-2xl text-red-600" /> Get Marked!
            </p>
            <p className="flex items-center gap-2">
              <GiConcentricCrescents className="text-2xl text-orange-600" />
              Become a Hero!
            </p>
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
