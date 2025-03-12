import React from "react";

interface Props {
  disabled: boolean;
}

const LoginButton = ({ disabled }: Props) => {
  return (
    <button
      type="submit"
      className="bg-primary-500 flex h-[30px] w-[140px] items-center justify-center rounded-md text-[12px] font-bold text-white"
      disabled={disabled}
    >
      로그인
    </button>
  );
};

export default LoginButton;
