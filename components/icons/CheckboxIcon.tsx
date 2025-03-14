import React from "react";

interface Props {
  checked?: boolean;
}

const CheckboxIcon = ({ checked }: Props) => {
  if (!checked)
    return (
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_11_392)">
          <rect x="3" y="2.5" width="16" height="16" rx="4" fill="white" />
          <rect
            x="3.5"
            y="3"
            width="15"
            height="15"
            rx="3.5"
            stroke="#D4D4D8"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_11_392"
            x="0"
            y="0.5"
            width="22"
            height="22"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_11_392"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_11_392"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_11_392"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );

  if (checked)
    return (
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_11_428)">
          <rect x="3" y="2.5" width="16" height="16" rx="4" fill="#2DA2FF" />
        </g>
        <path
          d="M7 9.8L10 13.1667L15 8.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_d_11_428"
            x="0"
            y="0.5"
            width="22"
            height="22"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_11_428"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.176471 0 0 0 0 0.635294 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_11_428"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_11_428"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
};

export default CheckboxIcon;
