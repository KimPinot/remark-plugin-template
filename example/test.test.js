import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkEmbed from "../src/index.js";

const doc = fs.readFileSync(path.resolve(process.cwd(), "example/example.md"));

const result = (markdown) => remark().use(remarkEmbed).processSync(markdown);

describe("remark-template", () => {
  test("match doc snapshot", () => {
    expect(result(doc).value).toMatchSnapshot();
  });
});
