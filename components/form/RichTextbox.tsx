import React from "react";

interface Props {
  name: string;
  placeholder?: string;
}

const RichTextbox = ({ name, placeholder }: Props) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="outline-primary-500 h-[200px] w-full resize-none rounded-[8px] border border-zinc-300 p-[12px] text-[16px]"
    />
  );
};

export default RichTextbox;
