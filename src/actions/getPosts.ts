type Posts = {
  title: string;
  content: string;
};

export const getPosts = async (
  page: number,
  perPage: number
): Promise<Posts[]> => {
  const res = await fetch(
    `https://nomadiclifter.com/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const posts = await res.json();

  return posts.map((post: any) => {
    return {
      title: post.title.rendered,
      content: post.content.rendered,
    };
  });
};
