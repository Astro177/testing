import React, { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import SideDetails from "./components/SideDetails/SideDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Questions from "./components/Questions/Questions";

const App = () => {
  const [readTime, setReadTime] = useState("");
  const [marked, setMarked] = useState([]);

  const handleReadTime = (readTime) => {
    const previousReadTIme = JSON.parse(localStorage.getItem("readingTime"));
    if (previousReadTIme) {
      const sum = previousReadTIme + readTime;
      localStorage.setItem("readingTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readingTime", readTime);
      setReadTime(readTime);
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:px-10 lg:px-16">
        <div className="card card-compact w-full bg-base-100 shadow-xl my-12 grid grid-cols-1 gap-10 px-4">
          <Blogs
            handleReadTime={handleReadTime}
            marked={marked}
            setMarked={setMarked}
          ></Blogs>
        </div>
        <div>
          <SideDetails readTime={readTime} marked={marked}></SideDetails>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <Questions></Questions>
    </div>
  );
};

export default App;
