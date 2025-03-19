"use client";

import React from "react";
import ChevronLeft from "@/components/icons/ChevronLeft";
import ChevronRight from "@/components/icons/ChevronRight";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ReportImageSlide = () => {
  const [sliderRef, instanceRef] = useKeenSlider({ initial: 0, loop: true });

  return (
    <div className="relative h-[480px] w-[min(960px,100%)] overflow-hidden rounded-[24px]">
      <div ref={sliderRef} className="keen-slider h-full w-full">
        <div className="keen-slider__slide lazy__slide bg-red-500">1</div>
        <div className="keen-slider__slide lazy__slide bg-blue-500">2</div>
        <div className="keen-slider__slide lazy__slide bg-yellow-500">3</div>
      </div>

      <div className="absolute top-1/2 flex h-auto w-full translate-y-[-50%] flex-row items-center justify-between px-6">
        <button
          className="cursor-pointer"
          onClick={() => instanceRef.current?.prev()}
        >
          <ChevronLeft />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => instanceRef.current?.next()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReportImageSlide;
