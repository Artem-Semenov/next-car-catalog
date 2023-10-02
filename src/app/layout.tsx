import Header from "@/components/layout/Header/Header";
import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/layout/Footer/Footer";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(
  () => import("@/components/layout/Footer/Footer"),
  {
    ssr: false,
  }
);

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <DynamicFooter />
      </body>
    </html>
  );
}
