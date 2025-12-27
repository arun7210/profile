import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/layout/Header";
import { lufga } from "./FontSetting";
import ScrollAnimations from "./ui/component/animate";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lufga.variable}`}>
        <Header />

        <ScrollAnimations />
        
        {children}
      </body>
    </html>
  );
}
