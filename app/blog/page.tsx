import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Ethan's Blog",
  };
}

export default async function BlogPage() {
  return (
    <main>
      <Link href={"/blog/123/"}>This is a link to a blog</Link>
    </main>
  );
}
