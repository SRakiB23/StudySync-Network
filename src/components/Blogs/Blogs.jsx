import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-5">
        <h3 className="text-lg text-purple-500">EXAM HELP</h3>
        <h2 className="text-3xl font-bold">Recent Blogs and News</h2>
      </div>
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Blogs;
