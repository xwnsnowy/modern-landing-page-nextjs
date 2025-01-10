import React from "react";
import { twMerge } from "tailwind-merge";

const Pointer = (props: { name: string; color?: "red" | "blue" }) => {
  const { name, color = "red" } = props;
  return (
    <div className="relative cursor-default">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer text-primary-foreground size-5"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div className="absolute top-full left-full">
        <div
          className={twMerge(
            "inline-flex rounded-full font-semibold text-primary-foreground/80 text-sm rounded-tl-none px-2 mt-1 bg-blue-400",
            color === "red" && "bg-red-400 text-primary"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default Pointer;
