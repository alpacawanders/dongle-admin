import React from "react";
import clsx from "clsx";

interface Props {
  width?: string;
  height?: string;
  direction?: "column" | "row";
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "left"
    | "right";
  align?: "start" | "center" | "end";
  gap?: number;
  children: React.ReactNode;
}

const FlexBox = ({
  width = "auto",
  height = "auto",
  direction = "column",
  justify = "center",
  align = "center",
  gap = 0,
  children,
}: Props) => {
  return (
    <div
      className={clsx(`flex`, {
        [`w-${width}`]: width,
        [`h-${height}`]: height,
        [`flex-col`]: direction === "column",
        [`flex-row`]: direction === "row",
        [`justify-${justify}`]: justify,
        [`items-${align}`]: align,
        [`gap-${gap}`]: gap,
      })}
    >
      {children}
    </div>
  );
};

export default FlexBox;
