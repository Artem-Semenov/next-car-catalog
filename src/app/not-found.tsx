import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 not found",
};

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <Head>
        <title>Not found 404</title>
      </Head>
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
