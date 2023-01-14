import { visit } from "unist-util-visit";

export default function remarkEmbed(options) {
  return function transformer(tree, file) {
    visit(tree, "heading", (node) => {
      console.log(node);
    });
  };
}
