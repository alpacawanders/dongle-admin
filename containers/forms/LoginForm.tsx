"use client";

import React from "react";
import LoginInput from "@/components/form/login/LoginInput";
import LoginButton from "@/components/form/login/LoginButton";
import { toast, Toaster } from "react-hot-toast";
import Form from "next/form";

const LoginForm = () => {
  return (
    <>
      <Form
        action={(formData: FormData) => {
          // TODO: 백엔드 로그인 API 기능 구현 완료 시 로직 구현
          console.log(formData.get("dongle-id"));
          toast.error("에러");
        }}
        className="flex h-auto w-auto flex-col items-start justify-start gap-2"
      >
        <LoginInput name="dongle-id" type="text" placeholder="ID" />
        <LoginInput name="dongle-pw" type="password" placeholder="PW" />
        <LoginButton disabled={false} />
      </Form>
      <Toaster />
    </>
  );
};

export default LoginForm;
