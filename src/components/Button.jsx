import React from "react";

const Button = (props) => {
  return (
    <div className="my-4 overflow-hidden">
      <button
        type="button"
        className="rounded-xl h-10 p-2 mr-2 px-4  text-sm border-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer"
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
