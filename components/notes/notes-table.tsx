import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getNote, getNotesDisplay } from "@/lib/notes";

type NoteCategory = "cooking" | "chinese" | "developer";

function formatDate(date: string) {
    const localDate = new Date(date + "T00:00:00");
    return new Date(localDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default async function NotesTable({
    category,
    params,
}: {
    category: NoteCategory;
    params: { slug: string } | Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let note;
    let display;
    try {
        note = getNote(category, slug);
        display = getNotesDisplay(category);
    } catch {
        return notFound();
    }

    const { content } = await compileMDX({
        source: note.content,
        options: { parseFrontmatter: false },
        components: {},
    });

    return (
        <main className="max-w-3xl mx-auto px-4 py-12 space-y-6">
            <Link
                href={`/notes/${category}/`}
                className="mt-4 inline-block text-sm text-slate-600 hover:text-slate-900"
            >
                ← Back to {display}
            </Link>
            <header className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">
                    {note.meta.title}
                </h1>

                <p className="text-sm font-medium text-slate-600">
                    {formatDate(note.meta.date)}
                </p>

                {note.meta.preview ? (
                    <p className="text-slate-600 leading-relaxed">
                        {note.meta.preview}
                    </p>
                ) : null}
            </header>

            <article className="prose prose-slate max-w-none">
                {content}
            </article>
        </main>
    );
}
