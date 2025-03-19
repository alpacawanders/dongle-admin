import React from "react";
import ReportImageSlide from "@/components/domain/@club/ReportImageSlide";
import AnchorButton from "@/components/common/AnchorButton";

const ReportDetail = () => {
  return (
    <div className="mb-[48px] flex h-auto w-full flex-col items-start justify-start gap-[48px]">
      <ReportImageSlide />
      <div className="flex flex-col items-start justify-start gap-[4px]">
        <span className="text-[24px] font-semibold text-zinc-500">
          동아리명
        </span>
        <h2 className="text-[36px] font-bold text-zinc-700">활동보고서 제목</h2>
        <span className="text-[24px] font-medium text-zinc-300">
          2025. 03. 09
        </span>
      </div>
      <article className="flex h-auto w-full flex-col items-start justify-start border-y border-y-zinc-200 py-[48px] text-[18px] text-zinc-700">
        <p>안녕하세요. 순천대학교 웹 서비스 개발팀 알파카유랑단 입니다.</p>
        <p>안녕하세요. 순천대학교 웹 서비스 개발팀 알파카유랑단 입니다.</p>
        <p>안녕하세요. 순천대학교 웹 서비스 개발팀 알파카유랑단 입니다.</p>
        <p>안녕하세요. 순천대학교 웹 서비스 개발팀 알파카유랑단 입니다.</p>
        <p>안녕하세요. 순천대학교 웹 서비스 개발팀 알파카유랑단 입니다.</p>
      </article>
      <div className="flex w-full flex-row items-center justify-end">
        <AnchorButton color="default" href="/reports">
          뒤로가기
        </AnchorButton>
      </div>
    </div>
  );
};

export default ReportDetail;
