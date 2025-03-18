"use client";

import React from "react";
import clsx from "clsx";

interface Props {
  type: "submit" | "reset" | "button" | undefined;
  color: "primary" | "default" | "red";
  children: React.ReactNode;
  width?: number | "full";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ type, color, children, width = 160, onClick }: Props) => {
  return (
    <button
      className={clsx(`h-[50px] cursor-pointer rounded-[12px] font-bold`, {
        [`w-full`]: width === "full",
        [`w-[${width}px]`]: width !== "full" && !width,
        ["bg-primary-400 hover:bg-primary-500 text-white transition-colors"]:
          color === "primary",
        ["bg-zinc-100 text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-zinc-500"]:
          color === "default",
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
