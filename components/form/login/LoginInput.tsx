import React from "react";

interface Props {
  type: "text" | "password";
  name: string;
  placeholder: string;
}

const LoginInput = ({ type, name, placeholder }: Props) => {
  return (
    <input
      type={type}
      name={name}
      className="outline-primary-500 h-[30px] w-[140px] rounded-md border border-zinc-200 p-2 text-[12px]"
      placeholder={placeholder}
    />
  );
};

export default LoginInput;
