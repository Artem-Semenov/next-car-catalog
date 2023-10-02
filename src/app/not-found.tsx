import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    countryName: "UA",
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <h2>404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        style={{
          display: "block",
          padding: "10px 20px",
          background: "aqua",
          width: "fit-content",
          margin: "auto",
        }}
        href="/">
        Return Home
      </Link>
      <Image alt="" src={"/img/404.png"} width={500} height={500} />
    </div>
  );
}
