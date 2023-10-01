"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

const CarPage: NextPage = () => {
  const { push, replace } = useRouter();

  return (
    <>
      <div>CarPage</div>
      <button
        onClick={() => {
          push("/");
        }}>
        Go Home
      </button>
      <button
        onClick={() => {
          replace("/");
        }}>
        Go Home replace
      </button>
    </>
  );
};
export default CarPage;
