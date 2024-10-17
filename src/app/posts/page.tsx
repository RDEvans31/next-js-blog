import PostsFeed from "@/components/posts/PostsFeed";
import { Suspense } from "react";
import Loading from "./loading";

export const revalidate = 3600 * 24;

export default function Posts() {
  return (
    <div className="container mx-auto max-w-screen-sm">
      <Suspense fallback={<Loading />}>
        <PostsFeed page={1} perPage={10} />
      </Suspense>
    </div>
  );
}
