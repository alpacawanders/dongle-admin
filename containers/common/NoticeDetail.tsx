import React from "react";
import AnchorButton from "@/components/common/AnchorButton";
import AttachmentIcon from "@/components/icons/AttachmentIcon";
import Link from "next/link";

const NoticeDetail = () => {
  return (
    <>
      <div className="flex w-full flex-col items-start justify-start gap-[12px]">
        <h1 className="text-[36px] font-bold text-zinc-700">공지사항 제목</h1>
        <div className="flex flex-row items-start justify-start gap-[8px] text-zinc-500">
          <span className="text-[16px]">2025. 03. 09</span>
          <span className="text-[16px]">·</span>
          <span className="text-[16px]">총동아리연합회</span>
        </div>
      </div>
      <article className="w-full border-y border-y-zinc-200 py-[48px] text-[16px] text-zinc-700">
        <p>안녕하세요, 순천대학교 동아리 플랫폼 동글입니다.</p>
        <p>안녕하세요, 순천대학교 동아리 플랫폼 동글입니다.</p>
        <p>안녕하세요, 순천대학교 동아리 플랫폼 동글입니다.</p>
      </article>
      <ul className="flex flex-col items-start justify-start gap-[4px]">
        <li className="flex w-auto items-center justify-center">
          <Link
            href="/"
            className="text-primary-300 flex w-auto flex-row items-center justify-start gap-[12px]"
          >
            <AttachmentIcon />
            <span>첨부파일.docx</span>
          </Link>
        </li>
        <li className="flex w-auto items-center justify-center">
          <Link
            href="/"
            className="text-primary-300 flex w-auto flex-row items-center justify-start gap-[12px]"
          >
            <AttachmentIcon />
            <span>첨부파일.docx</span>
          </Link>
        </li>
      </ul>
      <div className="flex w-full flex-row items-center justify-end">
        <AnchorButton color="default" href="/notices">
          공지사항 목록
        </AnchorButton>
      </div>
    </>
  );
};

export default NoticeDetail;
