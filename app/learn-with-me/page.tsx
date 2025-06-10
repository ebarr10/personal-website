import Link from "next/link";

export default async function NotesPage() {
  return (
    <main>
      <Link href={"/learn-with-me/123/"}>This is a link to a Notes</Link>
    </main>
  );
}
