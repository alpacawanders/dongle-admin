import DongleLogo from "@/components/icons/DongleLogo";

interface Props {
  admin: React.ReactNode;
  club: React.ReactNode;
}

export default function Layout({ admin, club }: Props) {
  let role = "CLUB";
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-start gap-8 p-[24px]">
        <header className="flex h-[80px] min-w-[960px] flex-col items-center justify-center">
          <DongleLogo />
        </header>
        <main className="h-full w-[min(960px,100%)]">
          {role === "ADMIN" && admin}
          {role === "CLUB" && club}
        </main>
      </div>
    </>
  );
}
