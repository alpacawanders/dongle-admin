import BannerSlide from "@/components/common/BannerSlide";
import FlexBox from "@/containers/common/FlexBox";
import ShortcutButton from "@/components/common/ShortcutButton";
import NoticeList from "@/containers/common/NoticeList";

export default function Page() {
  return (
    <>
      <BannerSlide />
      <FlexBox
        width="full"
        direction="row"
        justify="between"
        align="center"
        gap={4}
      >
        <ShortcutButton text="동아리 정보 관리" href="/clubs" />
        <ShortcutButton text="활동보고서 관리" href="/reports" />
      </FlexBox>
      <NoticeList />
    </>
  );
}
