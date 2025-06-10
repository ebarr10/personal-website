import type { Metadata } from "next";
import { Cherry_Bomb_One, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "../styles/markdown.scss";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cherry = Cherry_Bomb_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ethan's Corner",
  description:
    "Explore web projects, tech insights, and the occasional food creation from developer Ethan Barr. A space for code, thoughts, and flavor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="text-3xl font-bold p-4 flex justify-center ">
      <Link href={"/"} className={`${cherry.className}`}>
        <h1 className="">Ethan&#39;s Corner</h1>
      </Link>
    </header>
  );

  const footer = (
    <footer className={`${cherry.className} py-4 text-center border-`}>
      Made by Ethan 😊
    </footer>
  );

  return (
    <html lang="en">
      <body className={`${geistMono.className}`}>
        <div className="relative min-h-screen">
          <div className="absolute inset-0 -z-10 bg-repeat opacity-20 background-image"></div>
          <div className="relative z-10">
            {header}
            <div className="flex-1 px-4 py-2">{children}</div>
            {footer}
          </div>
        </div>
      </body>
    </html>
  );
}
