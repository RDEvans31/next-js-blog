import {
  HTMLReactParserOptions,
  DOMNode,
  Element,
  attributesToProps,
} from "html-react-parser";
import { ImageProps } from "next/image";
import Image from "next/image";

const checkDimsPresentAndReturn = (
  dimension: string | boolean | undefined
): number | `${number}` | undefined => {
  if (dimension) {
    return dimension as `${number}`;
  }
  return 300;
};

export const htmlParserWordpressImageOptions: HTMLReactParserOptions = {
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
        sizes: props.sizes as string,
      };
      return <Image {...imageProps} />;
    }
  },
};
