import { IPostDataSingle } from "@/interfaces/post.interface";
import Link from "next/link";
import { FC } from "react";

const PostItem: FC<IPostDataSingle> = ({ post }) => {
  console.log(post);

  return (
    <Link
      href={`/post/${post.id}`}
      style={{
        border: "1px solid purple",
        borderRadius: "10px",
        padding: "10px",
        display: "block",
      }}>
      <p>name: {post.title}</p>
      <p>id: {post.id}</p>
    </Link>
  );
};

export default PostItem;
