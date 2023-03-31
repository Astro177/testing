import React from "react";

const Header = () => {
  return (
    <div>
      <div className="my-10 flex justify-around">
        <p className="text-3xl font-bold">Programming Portal</p>
        <img
          className="rounded-full"
          src="../../public/header-pic.jpg"
          alt="Header Profile"
        />
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
