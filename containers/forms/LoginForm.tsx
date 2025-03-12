import React from "react";
import LoginInput from "@/components/form/login/LoginInput";
import LoginButton from "@/components/form/login/LoginButton";

const LoginForm = () => {
  return (
    <form className="flex h-auto w-auto flex-col items-start justify-start gap-2">
      <LoginInput type="text" placeholder="ID" />
      <LoginInput type="password" placeholder="PW" />
      <LoginButton disabled={false} />
    </form>
  );
};

export default LoginForm;
