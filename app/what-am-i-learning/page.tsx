import Link from "next/link";

export default function NotesPage() {
  return (
    <main>
      <Link href={"/what-am-i-learning/123/"}>This is a link to a Note</Link>
    </main>
  );
}
