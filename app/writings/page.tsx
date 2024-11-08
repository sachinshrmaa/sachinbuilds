import Link from "next/link";
import React from "react";
import getPosts from "../../utils/getPosts";

export default function Writings() {
  const posts = getPosts("writings");
  return (
    <div>
      <div className="mb-1">
        <h1 className="text-2xl font-semibold">Sachin Builds</h1>
      </div>

      <div className="mt-2">
        <Link href="/" className="hover:text-blue-800">
          SachinBuilds
        </Link>
        /
        <Link href="/writings" className="text-blue-600 hover:text-blue-800 underline">
          Writings
        </Link>
      </div>

      <h1 className="my-4 font-semibold">All Writings</h1>

      <div>
        {posts.map((post, index) => (
          <div className="mb-6" key={index}>
            <small className="block text-slate-500">{post.date}</small>
            <Link
              href={`/writings/${post.slug}`}
              className="text-blue-600 hover:text-blue-800 underline text-lg font-semibold"
            >
              {post.title}
            </Link>
            <p className="text-slate-500">{post.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
