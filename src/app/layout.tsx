"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Aplikasi Web TBCheck",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Aplikasi Web TBCheck</title>
        <meta
          name="description"
          content="Website for admin to manage TBCheck mobile app."
        />
        <link
          rel="shortcut icon"
          href="favicon.png"
          type="image/x-icon"
        />
      </head>
      <body
        className={`${inter.className} ${
          pathname === "/privacy"
            ? ""
            : "border-8 rounded-xl w-[406px] mx-auto my-11 py-5"
        }`}
      >
        {children}
      </body>
    </html>
  );
}
