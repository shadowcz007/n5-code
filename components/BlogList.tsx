import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Link
          href={`/posts/${post.slug}`}
          key={post.slug}
          className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
        >
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <div className="text-sm text-gray-400 mt-2">{post.date}</div>
          <p className="mt-4 text-gray-300">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
} 