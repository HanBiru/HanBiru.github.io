import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REXTEC – レックステック株式会社",
  description:
    "Microsoft 365と連携するエージェント型AIを、企業向けに設計・構築します。データは組織の外に出しません。東北大学発スタートアップ。",
  openGraph: {
    title: "REXTEC – レックステック株式会社",
    description:
      "Microsoft 365と連携するエージェント型AIを、企業向けに設計・構築します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
