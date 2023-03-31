import React, { useEffect, useState } from "react";

const SideDetails = ({ readTime, marked }) => {
  const [time, setTime] = useState(readTime);
  useEffect(() => {
    const gettingTime = localStorage.getItem("readingTime");
    setTime(gettingTime);
  }, [readTime]);
  return (
    <div className="my-4 mx-48 md:m-auto lg:mx-48 sticky top-4">
      <p className="text-center text-purple-800 bg-purple-200 font-bold py-4 border-2 border-purple-900 align-c my-8 rounded-lg">
        Spent time on reading: {time} min
      </p>
      <div className="bg-gray-100 rounded-lg">
        <h1 className="font-bold text-2xl mb-5 mx-4">Bookmarked Blogs : {marked.length}</h1>
        {marked.map((item) => (
          <p className="mx-8 text-center font-bold bg-zinc-300 p-4 rounded-xl mb-3 shadow-lg shadow-indigo-300">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideDetails;
