import ProfileCard from "@/components/ProfileCard";
import BlogList from "@/components/BlogList";
import SearchBar from "@/components/SearchBar";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <SearchBar />
        <BlogList posts={posts} />
      </div>
      <div className="md:col-span-1">
        <ProfileCard />
      </div>
    </div>
  );
} 