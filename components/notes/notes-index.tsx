import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

type NoteCategory = "cooking" | "chinese" | "developer";

function formatDate(date: string) {
    const localDate = new Date(date + "T00:00:00");
    return new Date(localDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default function NotesIndex({
    category,
    title,
    description,
    hrefBase = `/notes/${category}`,
}: {
    category: NoteCategory;
    title: string;
    description?: string;
    hrefBase?: string;
}) {
    const notes = getAllNotes(category);

    return (
        <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
            <Link
                href="/notes/"
                className="mt-4 inline-block text-sm text-slate-600 hover:text-slate-900"
            >
                ← Back to Notes
            </Link>
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight">
                    {title}
                </h1>
                {description ? (
                    <p className="text-slate-600 leading-relaxed max-w-prose">
                        {description}
                    </p>
                ) : null}
            </header>

            <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
                <table className="min-w-full text-left">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-5 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                                Date
                            </th>
                            <th className="px-5 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                                Title
                            </th>
                            <th className="px-5 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                                Tags
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {notes.map((n) => (
                            <tr
                                key={n.slug}
                                className="border-t hover:bg-slate-50 transition"
                            >
                                <td className="px-5 py-3 align-top">
                                    <div className="text-sm font-medium text-slate-700">
                                        {formatDate(n.meta.date)}
                                    </div>
                                </td>

                                <td className="px-5 py-3">
                                    <Link
                                        href={`${hrefBase}/${n.slug}`}
                                        className="text-slate-900 hover:underline"
                                    >
                                        {n.meta.title}
                                    </Link>

                                    {n.meta.preview ? (
                                        <div className="mt-1 text-sm text-slate-600">
                                            {n.meta.preview}
                                        </div>
                                    ) : null}
                                </td>

                                <td className="px-5 py-3">
                                    <div className="flex flex-wrap gap-2">
                                        {n.meta.tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
