import { IPostDataSingle } from "@/interfaces/post.interface";
import { FC } from "react";

const PostItem: FC<IPostDataSingle> = ({ post }) => {
  console.log(post);

  return (
    <div>
      <p>name: {post.title}</p>
      <p>id: {post.id}</p>
    </div>
  );
};

export default PostItem;
