import { getPosts } from "@/actions/getPosts";
import parse, {
  HTMLReactParserOptions,
  DOMNode,
  Element,
  attributesToProps,
} from "html-react-parser";
import Image from "next/image";

type Post = {
  title: string;
  content: string;
};

type PostsFeedProps = {
  page: number;
  perPage: number;
};

type ImageProps = {
  loading: "lazy" | "eager" | undefined;
  decoding: "async" | "auto" | "sync" | undefined;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
  src: string;
  alt: string;
  className: string;
  srcSet: string;
  sizes: string;
};

const checkDimsPresentAndReturn = (
  dimension: string | boolean | undefined
): number | `${number}` | undefined => {
  if (dimension) {
    return dimension as `${number}`;
  }
  return 300;
};

const options: HTMLReactParserOptions = {
  replace(domNode: DOMNode) {
    if (
      domNode instanceof Element &&
      domNode.attribs &&
      domNode.name === "img"
    ) {
      const props = attributesToProps(domNode.attribs);
      const imageProps: ImageProps = {
        loading: "lazy",
        decoding: "async",
        width: checkDimsPresentAndReturn(props.width),
        height: checkDimsPresentAndReturn(props.height),
        src: props.src as string,
        alt: props.alt as string,
        className: props.className as string,
        srcSet: props.srcSet as string,
        sizes: props.sizes as string,
      };
      return <Image {...imageProps} />;
    }
  },
};

export default async function PostsFeed({ page, perPage }: PostsFeedProps) {
  const posts: Post[] = await getPosts(page, perPage);

  return (
    <div className="container mx-auto max-w-screen-sm">
      {posts.map((post, index) => (
        <div key={index} className="p-4 border-b-2 border-black">
          <h1 className="mx-auto py-16 text-center text-balance text-2xl font-black text-transparent bg-gradient-to-br from-red-500 to-violet-500 bg-clip-text">
            {post.title}
          </h1>
          <div
            className="text-justify"
            // dangerouslySetInnerHTML={{ __html: post.content }}
          >
            {parse(post.content, options)}
          </div>
        </div>
      ))}
    </div>
  );
}
