import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <Link href={"/blog/123/"}>This is a link to a blog</Link>
    </main>
  );
}
