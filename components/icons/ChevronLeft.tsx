import React from "react";

interface Props {
  fill?: string;
}

const ChevronLeft = ({ fill }: Props) => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_126_1284)">
        <path
          d="M9 1L1.85081 7.41594C1.40044 7.82012 1.40944 8.52856 1.86993 8.92116L9 15"
          stroke={fill ?? "#9F9FA9"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_126_1284">
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

export default ChevronLeft;
