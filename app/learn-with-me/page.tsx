import Link from "next/link";

export default function NotesPage() {
  return (
    <main>
      <Link href={"/learn-with-me/123/"}>This is a link to a Note</Link>
    </main>
  );
}
