import PostsFeed from "@/components/posts/PostsFeed";
import { Suspense } from "react";
import Loading from "./loading";

export default function Posts() {
  return (
    <div className="container mx-auto max-w-screen-sm">
      <Suspense fallback={<Loading />}>
        <PostsFeed />
      </Suspense>
    </div>
  );
}
