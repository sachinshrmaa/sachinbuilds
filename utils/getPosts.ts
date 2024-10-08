import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../types/posts";

const getPosts = (postCategory: string): PostMetadata[] => {
  const folder = `posts/${postCategory}`;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${postCategory}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      thumbnail: matterResult.data.thumbnail,
      slug: fileName.replace(".md", ""),
      category: matterResult.data.category,
      subCategory: matterResult.data.subCategory,
    };
  });

  // Sort posts by date in descending order
  posts.sort((a: PostMetadata, b: PostMetadata) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return posts;
};

export default getPosts;
