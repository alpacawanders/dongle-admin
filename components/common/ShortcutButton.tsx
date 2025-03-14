import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  text: string;
  href: string;
  width?: string;
}

const ShortcutButton = ({ text, href, width }: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        `flex h-[80px] w-full items-center justify-center rounded-[12px] border border-zinc-200 text-[24px] font-semibold text-gray-500 transition-[border,background,color] hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-700`,
        {
          [`w-${width}`]: width,
        },
      )}
    >
      {text}
    </Link>
  );
};

export default ShortcutButton;
