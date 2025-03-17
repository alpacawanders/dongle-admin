"use client";

import React from "react";
import Link from "next/link";
import Pagination from "@/components/common/Pagination";
import Button from "@/components/common/Button";
import AnchorButton from "@/components/common/AnchorButton";

const ReportList = () => {
  return (
    <>
      <ul className="flex h-auto w-full flex-col items-start justify-start">
        <li className="h-[60px] w-full border-b border-b-zinc-100">
          <Link
            href="/"
            className="flex h-full w-full flex-row items-center justify-between"
          >
            <h2 className="font-semibold text-zinc-700">활동보고서 제목</h2>
            <span className="font-medium text-zinc-500">2025. 03. 09</span>
          </Link>
        </li>
      </ul>
      <div className="flex w-full items-center justify-center">
        <Pagination
          maxPage={10}
          limit={5}
          onPageChange={(page) => console.log(page)}
        />
      </div>
      <div className="flex w-full items-center justify-end">
        <AnchorButton href="/reports/write" color="primary">
          활동보고서 작성
        </AnchorButton>
      </div>
    </>
  );
};

export default ReportList;
