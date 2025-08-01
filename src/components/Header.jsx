import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/ConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2  shadow-xl">
      <div className="flex col-span-1">
        <div onClick={handleOnClick} className="hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <img
          className="h-8 mx-2"
          src="https://as2.ftcdn.net/jpg/07/37/98/99/1000_F_737989984_yqhTN9GhvLeuUiLjUp9MSe1IacGNXlsl.jpg"
          alt="Youtube Logo"
        />
      </div>
      <div className="col-span-10 ml-5">
        <input
          type="text"
          placeholder="Type Something.."
          className="w-1/2 border border-gray-400 p-2 px-4 rounded-tl-full rounded-bl-full hover:border-gray-500 text-gray-700"
        />
        <button
          type="button"
          className="rounded-tr-full pt-[6px] px-3 pb-[14px] rounded-br-full border border-gray-400 border-l-0 bg-gray-100 text-"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
