"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  color: "primary" | "default" | "red";
  children: React.ReactNode;
  width?: number | "full";
  href?: string;
}

const AnchorButton = ({ color, children, width, href }: Props) => {
  return (
    <Link
      className={clsx(
        "flex h-[50px] w-[160px] cursor-pointer items-center justify-center rounded-[12px] font-bold",
        {
          [`w-full`]: width === "full",
          [`w-[${width}px]`]: width !== "full" && !width,
          ["bg-primary-400 hover:bg-primary-500 text-white transition-colors"]:
            color === "primary",
          ["bg-zinc-100 text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-zinc-500"]:
            color === "default",
        },
      )}
      href={href ?? ""}
    >
      {children}
    </Link>
  );
};

export default AnchorButton;
