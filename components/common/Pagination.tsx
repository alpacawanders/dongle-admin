"use client";

import React, { useEffect, useState } from "react";
import ChevronRight from "@/components/icons/ChevronRight";
import ChevronLeft from "@/components/icons/ChevronLeft";

interface Props {
  maxPage: number;
  limit: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ maxPage, limit, onPageChange }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageRange, setPageRange] = useState<number[]>(
    Array.from({ length: maxPage < limit ? maxPage : limit }, (_, i) => i + 1),
  );

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  const prev = () => {
    if (currentPage - 1 <= 0) return;
    if ((currentPage - 1) % limit === 0)
      setPageRange(
        Array.from({ length: limit }, (_, i) => currentPage - limit + i),
      );
    setCurrentPage((prev) => prev - 1);
  };

  const next = () => {
    if (currentPage + 1 > maxPage) return;
    if ((currentPage + 1) % limit === 1)
      setPageRange(
        Array.from(
          {
            length:
              maxPage - currentPage < limit ? maxPage - currentPage : limit,
          },
          (_, i) => currentPage + 1 + i,
        ),
      );
    setCurrentPage((prev) => prev + 1);
  };

  if (maxPage <= 1) return;

  return (
    <ul className="flex h-auto w-full flex-row items-center justify-center gap-4">
      <li>
        <button
          className="flex h-12 w-12 items-center justify-center"
          onClick={prev}
        >
          <ChevronLeft />
        </button>
      </li>
      {pageRange.map((page) => (
        <li
          key={page}
          className={`h-12 w-12 rounded-[12px] bg-none text-[18px] font-semibold ${currentPage === page ? `bg-primary-500 text-white` : `bg-zinc-100 text-zinc-400`}`}
        >
          <button
            onClick={() => setCurrentPage(page)}
            className="h-full w-full border-none bg-none outline-none"
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          className="flex h-8 w-8 items-center justify-center"
          onClick={next}
        >
          <ChevronRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
