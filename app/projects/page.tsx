import Link from "next/link";

export default function ProjectPage() {
  return (
    <main>
      <Link href={"/projects/123/"}>This is a link to a project</Link>
    </main>
  );
}
