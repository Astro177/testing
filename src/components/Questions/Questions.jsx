import React from "react";

const Questions = () => {
  return (
    <div className="text-center font-semibold mt-12 mb-12 bg-cyan-200 rounded-xl p-6">
     <p className="text-2xl">Question #1: What is the difference between Props and state?</p>
     <p className="mb-6">Ans: Props is short for properties. It is used for passing data from a parent component to a child component as an object. <br /> On the other hand state is used to manage a components internal state. React uses state to render a component.</p>
     <p className="text-2xl">Question #2: How does useState Work?</p>
     <p className="mb-6">Ans: useState is a hook in React that can be used to update the state value. useState is called with an initial state value and then it return an array of two values.</p>
     <p className="text-2xl">Question #3: What is the purpose of useEffect other than fetching data?</p>
     <p className="mb-6">Ans: The purpose of useEffect other than fetching data is manipulating the DOM , handling side effects in general.</p>
     <p className="text-2xl">Question #4: how does react work?</p>
     <p>Ans: React is a javascript library that can be used for building user interfaces. it creates components using JSX, that allows us to write HTML-like code in our js file. it uses virtual dom and fast rendering efficiency that makes fast and efficient wat to build and update user interface.</p>
    </div>
  );
};

export default Questions;
