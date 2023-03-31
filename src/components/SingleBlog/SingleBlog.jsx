import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const SingleBlog = ({ blog, handleReadTime, setMarked }) => {
  const handleToast = ()=>{
    toast("Bookmark Already Added")
  }
  return (
    <div>
      <div>
        <figure>
          <img className="w-full" src={blog.picture} alt="programming pic" />
        </figure>
        <div className="card-body my-4">
          <div className="flex justify-between">
            <div>
              <div className="flex gap-2">
                <div>
                  <img
                    className="w-12 rounded-full"
                    src={blog.author_pic}
                    alt="author pic"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{blog.author}</h3>
                  <p>Mar 30(4 Days ago)</p>
                </div>
              </div>
            </div>
            <div>
              <p>
                {blog.reading_time} min read{" "}
                <FontAwesomeIcon
                  className="cursor-pointer"
                  onClick={() => {
                    setMarked((marked) => [...marked, blog.title]);
                    handleToast();
                  }}
                  icon={faBookmark}
                />
              </p>
            </div>
          </div>
          <h1 className="font-bold text-3xl my-4">{blog.title}</h1>
          <div className="flex gap-4">
            <p className="cursor-pointer">#beginners</p>
            <p className="cursor-pointer mb-4">#programming</p>
          </div>
          <p
            onClick={() => handleReadTime(blog.reading_time)}
            className="text-blue-600 underline decoration-blue-600 cursor-pointer"
          >
            Mark as read
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
