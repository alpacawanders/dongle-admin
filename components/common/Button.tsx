"use client";

import React from "react";
import clsx from "clsx";

interface Props {
  type: "submit" | "reset" | "button" | undefined;
  color: "primary" | "default" | "red";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ type, color, children, onClick }: Props) => {
  return (
    <button
      className={clsx(
        "h-[50px] w-[160px] cursor-pointer rounded-[12px] font-bold",
        {
          ["bg-primary-400 hover:bg-primary-500 text-white transition-colors"]:
            color === "primary",
          ["bg-zinc-100 text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-zinc-500"]:
            color === "default",
        },
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
