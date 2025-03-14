import React from "react";
import Link from "next/link";
import NewLabel from "@/components/icons/NewLabel";

const NoticeList = () => {
  return (
    <div className="flex h-auto w-full flex-col items-start justify-start gap-[12px]">
      <div className="flex h-auto w-full flex-row items-center justify-between">
        <h2 className="text-[24px] font-bold text-zinc-700">동글 공지사항</h2>
        <Link
          href="/notices"
          className="text-[16px] font-semibold text-zinc-400"
        >
          더 보기
        </Link>
      </div>
      <ul className="flex w-full flex-col items-start justify-start gap-0">
        <li className="h-[60px] w-full border-b border-b-zinc-100">
          <Link
            href="/"
            className="flex h-full w-full flex-row items-center justify-between"
          >
            <div className="flex h-auto w-auto flex-row items-center justify-start gap-2">
              <NewLabel />
              <span className="font-semibold text-zinc-700">공지사항 제목</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NoticeList;
