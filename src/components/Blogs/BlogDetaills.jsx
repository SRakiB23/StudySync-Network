import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "animate.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        const blogPost = data.find((blog) => blog.id === id);
        setBlog(blogPost);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  // Add a null check for the blog object
  const { title, description, image, date, writer } = blog || {};

  return (
    <div className="max-w-3xl mx-auto p-5">
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover rounded-lg animate__animated animate__flipInY"
      />
      <div className="flex justify-between items-center py-3">
        <h2 className="text-3xl font-bold mt-5">{title}</h2>
        <span className="text-gray-700 mt-4 block">Date: {date}</span>
      </div>
      <p className="text-gray-600 mt-2 text-base">{description}</p>
      <p className="text-gray-900 font-bold mt-2">Writer: {writer}</p>
    </div>
  );
};

export default BlogDetails;
