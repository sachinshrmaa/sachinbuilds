import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string, postCategory: string) => {
  const folder = `posts/${postCategory}/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default getPostContent;
