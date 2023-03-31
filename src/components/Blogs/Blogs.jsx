import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = ({ handleReadTime , marked , setMarked }) => {
  

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookMark = (number) => {
    const newMarked = [...marked , number];
    setMarked(newMarked);
  };
  return (
    <div>
      {blogs.map((blog) => (
        <SingleBlog
          handleReadTime={handleReadTime}
          handleBookMark={handleBookMark}
          blog={blog} marked={marked} setMarked={setMarked} key={blog.id}
        ></SingleBlog>
      ))}
    </div>
  );
};

export default Blogs;
