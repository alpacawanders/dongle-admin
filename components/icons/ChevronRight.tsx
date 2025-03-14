import React from "react";

interface Props {
  fill?: string;
}

const ChevronRight = ({ fill }: Props) => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_126_1286)">
        <path
          d="M0.999917 15L8.14911 8.58406C8.59948 8.17988 8.59048 7.47144 8.12999 7.07884L0.999918 1"
          stroke={fill ?? "#9F9FA9"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_126_1286">
          <rect
            width="16"
            height="10"
            fill="white"
            transform="translate(10) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronRight;
