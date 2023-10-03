import styles from "./home.module.scss";
import { FC } from "react";
import { IPostData } from "@/interfaces/post.interface";
import PostItem from "@/components/ui/PostItem/PostItem";

const Home: FC<IPostData> = ({ posts }) => {
  return (
    <div style={{ maxWidth: "1100px", margin: "auto" }}>
      <h1>Hello world! {posts.length || 0}</h1>

      {posts.length
        ? posts.map((post, i) => {
            return <PostItem key={i} post={post} />;
          })
        : "not found"}
    </div>
  );
};
export default Home;
