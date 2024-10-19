import InitialPostsFeed from "@/components/posts/InitialPostFeed";

export const revalidate = 3600 * 24;

export default function Posts() {
  return (
    <div className="container mx-auto max-w-screen-sm">
      <InitialPostsFeed page={1} perPage={10} />
    </div>
  );
}
