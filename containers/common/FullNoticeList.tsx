"use client";

import React from "react";
import NewLabel from "@/components/icons/NewLabel";
import Pagination from "@/components/common/Pagination";
import Link from "next/link";

const FullNoticeList = () => {
  return (
    <>
      <ul className="flex w-full flex-col items-start justify-start">
        <li className="flex h-[60px] w-full items-center justify-start border-b border-b-zinc-100">
          <Link
            href="/"
            className="flex w-full flex-row items-center justify-between"
          >
            <div className="flex h-full w-auto flex-row items-center justify-start gap-[12px]">
              <NewLabel />
              <span className="text-[16px] font-semibold text-zinc-700">
                공지사항 제목
              </span>
            </div>
            <div className="flex h-full w-auto flex-row items-center justify-end gap-[8px] text-zinc-500">
              <span>2025. 03. 09</span>
              <span>·</span>
              <span>총동아리연합회</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className="flex h-auto w-full flex-row items-center justify-end">
        <Pagination
          maxPage={10}
          limit={5}
          onPageChange={(page) => console.log(page)}
        />
      </div>
    </>
  );
};

export default FullNoticeList;
