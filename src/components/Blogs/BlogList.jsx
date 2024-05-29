// BlogList.js
import React from "react";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const trimDescription = (description) => {
    const words = description.split(" ");
    return words.length > 20
      ? words.slice(0, 15).join(" ") + "..."
      : description;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-item p-5 border rounded-lg shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
          <p className="text-gray-600 mt-2">
            {trimDescription(blog.description)}
          </p>
          <span className="text-gray-500 mt-4 block">{blog.date}</span>
          <Link to={`/blogs/${blog.id}`} className="text-blue-500 mt-4 block">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
