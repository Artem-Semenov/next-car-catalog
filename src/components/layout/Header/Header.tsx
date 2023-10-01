"use client";
import Link from "next/link";
import { FC } from "react";
import style from "./Header.module.scss";
import { usePathname } from "next/navigation";

type Props = {};
const Header: FC = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={style.header}>
      <Link className={pathname === "/" ? style.active : ""} href={"/"}>
        Home
      </Link>
      <Link
        className={pathname === "/about-us" ? style.active : ""}
        href={"/about-us"}>
        About us
      </Link>
    </div>
  );
};
export default Header;
