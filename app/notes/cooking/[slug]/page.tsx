import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getNote, getNoteSlugs } from "@/lib/notes";

export function generateStaticParams() {
    return getNoteSlugs("cooking").map((slug) => ({ slug }));
}

export default async function CookingNotePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let note;
    try {
        note = getNote("cooking", slug);
    } catch {
        return notFound();
    }

    const { content, frontmatter } = await compileMDX({
        source: note.content,
        options: {
            parseFrontmatter: false,
        },
        components: {},
    });

    function formatDate(date: string) {
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }

    return (
        <main className="max-w-3xl mx-auto px-4 py-12 space-y-6">
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
