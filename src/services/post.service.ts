import { IPost } from "@/interfaces/post.interface";
import axios from "axios";

const API_URL = "https://jsonplaceholder.org";

axios.defaults.baseURL = API_URL;

export const PostsService = {
  async getAll() {
    const { data } = await axios.get<IPost[]>("/posts");
    return data;
  },

  async getById(id: number) {
    const { data } = await axios.get<IPost>(`/posts/${id}`);
    return data;
  },
};
