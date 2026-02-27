import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";

export const metadata: Metadata = {
  title: "루체피부과의원 | 당신의 피부에 빛을 더하다",
  description:
    "강남 피부과 전문의 3인이 함께하는 프리미엄 피부클리닉. 리프팅, 레이저, 보톡스, 필러, 피부관리까지 1:1 맞춤 진료.",
  keywords:
    "피부과, 강남피부과, 리프팅, 레이저, 보톡스, 필러, 피부관리, 여드름, 기미, 루체피부과",
  openGraph: {
    title: "루체피부과의원 | 당신의 피부에 빛을 더하다",
    description:
      "피부과 전문의 3인이 함께하는 프리미엄 피부클리닉. 1:1 맞춤 진료로 당신만의 아름다움을 완성합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
