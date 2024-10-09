import { getPosts } from "@/actions/getPosts";

type Post = {
  title: string;
  content: string;
};

type PostsFeedProps = {
  page: number;
  perPage: number;
};

export default async function PostsFeed({ page, perPage }: PostsFeedProps) {
  const posts: Post[] = await getPosts(page, perPage);

  return (
    <div className="container mx-auto max-w-screen-sm">
      {posts.map((post, index) => (
        <div key={index} className="p-4 border-b">
          <h1 className="mx-auto py-16 text-center text-balance text-2xl font-black text-transparent bg-gradient-to-br from-red-500 to-violet-500 bg-clip-text">
            {post.title}
          </h1>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      ))}
    </div>
  );
}
