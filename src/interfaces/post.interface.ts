export interface IPost {
  address: object;
  company: object;
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  login: object;
  phone: string;
  website: string;
  title: string
}

export interface IPostData {
  posts: IPost[]
}

export interface IPostDataSingle {
  post: IPost
}