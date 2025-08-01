import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const List = [
    "All",
    "Music",
    "Podcasts",
    "News",
    "Movies",
    "Live",
    "Soccer",
    "Cricket",
  ];
  return (
    <div className="flex">
      {List.map((btnName, index) => (
        <Button key={index} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
