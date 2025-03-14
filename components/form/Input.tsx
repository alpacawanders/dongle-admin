import React, { InputHTMLAttributes } from "react";

interface Props {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  placeholder?: string;
}

const Input = ({ type, name, placeholder }: Props) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="outline-primary-500 h-[40px] w-full rounded-[8px] border border-zinc-300 px-[12px] text-[16px]"
    />
  );
};

export default Input;
