"use client";

import React, { useEffect, useRef, useState } from "react";
import UploadIcon from "@/components/icons/UploadIcon";

interface Props {
  maxFiles?: number;
  maxSize?: number;
  accept?: string;
  defaultValue?: File[];
}

// TODO: 파일 삭제 핸들러 구현
const FileUpload = ({
  maxFiles = 5,
  maxSize = 2,
  accept,
  defaultValue,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>(defaultValue ?? []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (files.length >= 5) return;
    if (e.target.files) {
      const file = e.target.files[0];
      setFiles((prev) => [...prev, file]);
    }
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={onFileChange}
        accept={accept}
      />
      {files.length <= 0 && (
        <button
          type="button"
          className="h-[120px] w-full cursor-pointer rounded-[8px] border border-zinc-300 bg-zinc-50"
          onClick={() => inputRef.current?.click()}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-[4px] text-zinc-400">
            <UploadIcon />
            <p className="text-[16px]">업로드할 파일을 선택해 주세요.</p>
            <p className="text-[12px]">
              최대 {maxFiles}개, {maxSize}MB 제한
            </p>
          </div>
        </button>
      )}
      {files.length > 0 && (
        <>
          <ul className="h-[120px] w-full rounded-[8px] border border-zinc-300 bg-zinc-50 p-[12px] text-zinc-700">
            {files.map((file) => (
              <li
                key={`${file.name}_${file.lastModified}`}
                className="flex flex-row items-center justify-between"
              >
                <span>{file.name}</span>
                <button type="button" className="cursor-pointer text-red-500">
                  삭제
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="text-primary-500 cursor-pointer"
            onClick={() => inputRef.current?.click()}
          >
            파일 업로드
          </button>
        </>
      )}
    </>
  );
};

export default FileUpload;
