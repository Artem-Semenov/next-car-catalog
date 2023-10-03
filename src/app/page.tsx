import Home from "@/components/screens/Home/Home";
import { PostsService } from "@/services/post.service";
import { NextPage } from "next";

const HomePage: NextPage = async () => {
  const posts = await PostsService.getAll();
  return <Home posts={posts} />;
};

export default HomePage;
