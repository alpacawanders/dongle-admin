import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  style: "normal",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "동글 관리자",
  description: "우리의 동아리, 우리의 동글",
  metadataBase: new URL("https://admin.dongle.world"),
  openGraph: {
    images: [{ url: "./thumbnail.png", alt: "동글 썸네일" }],
    locale: "ko",
    url: "https://admin.dongle.world",
    description: "우리의 동아리, 우리의 동글",
    type: "website",
    siteName: "동글 관리자",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
