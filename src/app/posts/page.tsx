interface Posts {
    title: string;
    content: string;
}

async function getPosts(): Promise<Posts[]> {
    const res = await fetch("https://nomadiclifter.com/wp-json/wp/v2/posts");
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
      const posts = await res.json();

      return posts.map((post: any) => {
        return {
            title: post.title.rendered,
            content: post.content.rendered
        }});
}

export default async function Posts() {
    const posts = await getPosts();
    const latestPost = posts[0];

  return  (
    <div className="container mx-auto max-w-screen-sm">
        {posts.map((post, index) => (
            <div key={index} className="p-4 border-b">
                <h1 className="mx-auto p-16 text-center text-2xl font-black text-transparent bg-gradient-to-br from-red-500 to-violet-500 bg-clip-text">{post.title}</h1>
                <div className="text-justify" dangerouslySetInnerHTML={{__html: post.content}}></div>
            </div>
        ))}
    </div>
  )
}
