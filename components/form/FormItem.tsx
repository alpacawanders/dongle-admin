import React from "react";
import clsx from "clsx";

interface Props {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormItem = ({ label, required, children }: Props) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <label
        className={clsx(`text-[16px] font-medium text-zinc-700`, {
          [`after:text-red-500 after:content-["*"]`]: required,
        })}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormItem;
