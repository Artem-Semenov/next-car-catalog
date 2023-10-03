import PostItem from "@/components/ui/PostItem/PostItem";
import { IPostDataSingle } from "@/interfaces/post.interface";
import { PostsService } from "@/services/post.service";
import { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await PostsService.getAll();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const post = await PostsService.getById(+id);

  return (
    <>
      <div>Post Page</div>
      <PostItem post={post} />

    </>
  );
};
export default PostPage;
