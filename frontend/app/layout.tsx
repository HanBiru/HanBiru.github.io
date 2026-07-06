import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REXTEC – レックステック株式会社",
  description:
    "AIで、人の力をもう一度引き出す。人の注意を奪うAIではなく、人を高めるAIを。Microsoft 365と連携するエージェント型AIの設計・開発。東北大学発スタートアップ。",
  openGraph: {
    title: "REXTEC – レックステック株式会社",
    description:
      "AIで、人の力をもう一度引き出す。Microsoft 365と連携するエージェント型AIの設計・開発。",
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
