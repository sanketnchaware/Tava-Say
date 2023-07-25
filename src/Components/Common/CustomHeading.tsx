import React from "react";

const CustomHeading = ({ text, color }: any) => {
  return (
    <div
      className={`text-${color} border-y-2   sm:m-0 m-auto border-Fawn w-fit`}
    >
      {text}
    </div>
  );
};

export default CustomHeading;
