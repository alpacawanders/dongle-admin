import DongleLogo from "@/components/icons/DongleLogo";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
        <header className="flex h-auto w-auto items-center justify-center">
          <DongleLogo />
        </header>
        {children}
        <footer className="flex flex-col items-center justify-center gap-0.5">
          <p className="text-[12px] text-zinc-300">
            Copyright by alpacawanders.
          </p>
          <p className="text-[12px] text-zinc-300">All Right Reserved.</p>
          <p className="text-[12px] text-zinc-300">
            Contact:
            <Link href="mailto:alpacawanders@gmail.com">
              alpacawanders@gmail.com
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
