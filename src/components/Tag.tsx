import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 font-semibold uppercase rounded-full items-center",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span>{children}</span>
    </div>
  );
};

export default Tag;
