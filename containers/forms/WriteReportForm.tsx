import React from "react";
import FormItem from "@/components/form/FormItem";
import Input from "@/components/form/Input";
import RichTextbox from "@/components/form/RichTextbox";
import FileUpload from "@/components/form/FileUpload";
import Button from "@/components/common/Button";
import AnchorButton from "@/components/common/AnchorButton";

const WriteReportForm = () => {
  return (
    <form className="flex w-full flex-col items-start justify-start gap-[48px]">
      <div className="flex w-full flex-col items-start justify-start gap-[24px]">
        <FormItem label="활동보고서 제목" required>
          <Input
            type="text"
            name="title"
            placeholder="활동보고서 제목을 입력해 주세요. (최소 5자)"
          />
        </FormItem>
        <FormItem label="활동보고서 본문" required>
          <RichTextbox
            name="content"
            placeholder="활동보고서 본문을 입력해 주세요. (최소 100자)"
          />
        </FormItem>
        <FormItem label="활동보고서 사진" required>
          <FileUpload />
        </FormItem>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-[12px]">
        <AnchorButton color="default" width="full" href="/reports">
          취소
        </AnchorButton>
        <Button type="submit" color="primary" width="full">
          활동보고서 작성
        </Button>
      </div>
    </form>
  );
};

export default WriteReportForm;
