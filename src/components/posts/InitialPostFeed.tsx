import { getPosts } from "@/actions/getPosts";
import { htmlParserWordpressImageOptions } from "@/shared/options_html_parser";
import parse from "html-react-parser";

type Post = {
  title: string;
  content: string;
};

type PostsFeedProps = {
  page: number;
  perPage: number;
};

export default async function InitialPostsFeed({
  page,
  perPage,
}: PostsFeedProps) {
  const posts: Post[] = await getPosts(page, perPage);

  return (
    <div className="container mx-auto max-w-screen-sm">
      {posts.map((post, index) => (
        <div
          key={index}
          className="p-4 border-b-2 border-black dark:border-white"
        >
          <h1 className="mx-auto py-16 text-center text-balance text-2xl font-black text-transparent bg-gradient-to-br from-red-500 to-violet-500 bg-clip-text">
            {post.title}
          </h1>
          <div className="text-justify">
            {parse(post.content, htmlParserWordpressImageOptions)}
          </div>
        </div>
      ))}
    </div>
  );
}
