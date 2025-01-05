import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{post.title}</h1>
      <div className="text-sm text-gray-400">{post.date}</div>
      <MDXRemote source={post.content} />
    </article>
  );
} 