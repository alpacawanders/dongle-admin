"use client";

import React, { useState } from "react";
import FormItem from "@/components/form/FormItem";
import FileUpload from "@/components/form/FileUpload";
import Checkbox from "@/components/form/Checkbox";
import DatePicker from "@/components/form/DatePicker";
import RichTextbox from "@/components/form/RichTextbox";

const ModifyClubForm = () => {
  const [isRecruiting, setIsRecruiting] = useState(true);
  return (
    <form className="flex w-full flex-col items-start justify-start gap-4">
      <FormItem label="동아리 썸네일" required={true}>
        <FileUpload />
      </FormItem>

      <FormItem label="모집 기간" required={true}>
        <div className="flex w-full flex-row items-center justify-start gap-4">
          <DatePicker disabled={!isRecruiting} />
          <span>~</span>
          <DatePicker disabled={!isRecruiting} />
        </div>
        <Checkbox
          name="isRecruiting"
          label="현재 모집중"
          defaultValue={isRecruiting}
          onChange={() => setIsRecruiting((prev) => !prev)}
        />
      </FormItem>

      <FormItem label="동아리 소개" required={true}>
        <RichTextbox name="test" placeholder="동아리 소개를 입력해 주세요." />
      </FormItem>
    </form>
  );
};

export default ModifyClubForm;
