"use client";

import React, { useState } from "react";
import CheckboxIcon from "@/components/icons/CheckboxIcon";

interface Props {
  name: string;
  label: string;
  defaultValue?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ name, label, defaultValue, onChange }: Props) => {
  const [checked, setChecked] = useState<boolean>(defaultValue ?? false);

  return (
    <div className="flex w-fit flex-row items-center justify-start gap-2">
      <label
        htmlFor={name}
        className="flex w-fit flex-row items-center justify-start gap-2 font-medium text-zinc-500"
      >
        <CheckboxIcon checked={checked} />
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="checkbox"
        className="hidden"
        checked={defaultValue}
        onChange={(e) => {
          if (onChange) onChange(e);
          setChecked(e.target.checked);
        }}
      />
    </div>
  );
};

export default Checkbox;
