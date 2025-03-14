import DongleLogo from "@/components/icons/DongleLogo";
import Link from "next/link";

interface Props {
  admin: React.ReactNode;
  club: React.ReactNode;
}

export default function Layout({ admin, club }: Props) {
  let role = "CLUB";
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-start gap-8">
        <header className="my-[24px] flex h-[80px] min-w-[960px] flex-col items-center justify-center">
          <DongleLogo />
        </header>
        <main className="flex min-h-screen w-[min(960px,100%)] flex-col items-start justify-start gap-[48px]">
          {role === "ADMIN" && admin}
          {role === "CLUB" && club}
        </main>
        <footer className="bottom-0 flex h-[120px] w-full items-center justify-center bg-zinc-50">
          <div className="flex h-full w-[min(960px,100%)] flex-col items-start justify-center text-[12px] text-zinc-300">
            <p>Copyright by alpacawanders.</p>
            <p>All Right Reserved.</p>
            <p>
              Contact:{" "}
              <Link href="mailto:alpacawanders@gmail.com">
                alpacawanders@gmail.com
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
