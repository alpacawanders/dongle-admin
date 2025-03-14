import React from "react";
import clsx from "clsx";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  defaultValue?: string;
}

const DatePicker = ({ onChange, disabled, defaultValue }: Props) => {
  return (
    <input
      type="date"
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
      className={clsx(
        "outline-primary-500 h-[40px] w-full rounded-[8px] border border-zinc-300 px-[12px] text-[16px]",
        { ["bg-zinc-50"]: disabled },
      )}
    />
  );
};

export default DatePicker;
