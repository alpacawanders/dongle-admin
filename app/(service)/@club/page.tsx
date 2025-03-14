import BannerSlide from "@/components/common/BannerSlide";
import ShortcutButton from "@/components/common/ShortcutButton";
import NoticeList from "@/containers/common/NoticeList";

export default function Page() {
  return (
    <>
      <BannerSlide />
      <div className="flex h-auto w-full flex-row items-center justify-between gap-4">
        <ShortcutButton text="동아리 정보 관리" href="/club" />
        <ShortcutButton text="활동보고서 관리" href="/reports" />
      </div>
      <NoticeList />
    </>
  );
}
