import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "jowoen",
  description: "..."
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${fontInter.variable} antialiased no-scrollbar overflow-y-auto`}>
        <Header/>
        <div className="w-full max-w-xl mx-auto flex flex-grow justify-center pt-8 px-2">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
