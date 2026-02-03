import Link from "next/link";
import { Card } from "@/components/card";
import { miscProjects } from "@/lib/projects/misc";

export default function MiscProjectsPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <header>
                <Link
                    href="/projects"
                    className="text-sm text-slate-600 hover:text-slate-900"
                >
                    ← Back to Projects
                </Link>
                <h1 className="mt-3 text-3xl font-bold tracking-tight">
                    Misc Projects
                </h1>
                <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
                    A lightweight archive of smaller experiments, practice
                    repos, and course projects. Filtering and categories can
                    evolve over time.
                </p>
            </header>

            <section className="mt-10 space-y-4">
                {miscProjects.map((p) => (
                    <Card key={p.title}>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-base font-medium">
                                    {p.title}
                                </h2>
                                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                    {p.description}
                                </p>

                                {p.tags?.length ? (
                                    <p className="mt-3 text-xs text-slate-500">
                                        {p.tags.join(" · ")}
                                    </p>
                                ) : null}
                            </div>

                            {p.repoUrl ? (
                                <Link
                                    href={p.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-slate-600 hover:text-slate-900"
                                >
                                    GitHub →
                                </Link>
                            ) : (
                                <span className="text-xs text-slate-500">
                                    Private
                                </span>
                            )}
                        </div>
                    </Card>
                ))}
            </section>
        </main>
    );
}
