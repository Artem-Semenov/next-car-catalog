"use client";
import { useRouter } from "next/navigation";

type Props = {};
const Footer = (props: Props) => {
  const { push, replace } = useRouter();

  return (
    <div>
      <p>dynamic Footer</p>
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
    </div>
  );
};
export default Footer;
