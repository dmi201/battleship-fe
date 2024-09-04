import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Battleship Game",
  description: "Powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        {" "}
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
