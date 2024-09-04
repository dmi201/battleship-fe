import type { Metadata } from "next";
import "../styles/globals.css";
import { UserProvider } from "@/context/UserContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <body className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
