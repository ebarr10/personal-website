import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Ethan's Projects",
  };
}

export default async function ProjectPage() {
  return (
    <main>
      <Link href={"/projects/123/"}>This is a link to a project</Link>
    </main>
  );
}
