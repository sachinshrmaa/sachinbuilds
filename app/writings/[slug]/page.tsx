import getPosts from "../../../utils/getPosts";
import getPostContent from "../../../utils/getPostContent";
import moment from "moment";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const posts = getPosts("writings");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostDetail(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug, "writings");

  return (
    <div>
      <div className="mb-1">
        <h1 className="text-2xl font-semibold">Sachin Builds</h1>
      </div>
      <div className="my-2">
        <Link href="/" className="hover:text-blue-800">
          SachinBuilds
        </Link>
        /
        <Link href="/writings" className="hover:text-blue-800">
          Writings
        </Link>
        /
        <Link href="/writings" className="text-blue-600 hover:text-blue-800 underline">
          {slug}
        </Link>
      </div>
      <h1>{post.data.title}</h1>
      <small> {moment(post.data.date).format("MMMM D, YYYY")}</small>

      <article className="prose post-body">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
