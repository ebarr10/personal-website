"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Card } from "@/components/card";
import { miscProjects } from "@/lib/projects/misc";

type Filter = "all" | "app" | "tool" | "experiment" | "course";

const FILTERS: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "app", label: "Apps" },
    { id: "tool", label: "Tools" },
    { id: "experiment", label: "Experiments" },
    { id: "course", label: "Courses" },
];

export default function MiscProjectsPage() {
    const [filter, setFilter] = useState<Filter>("all");

    const filtered = useMemo(() => {
        if (filter === "all") return miscProjects;
        return miscProjects.filter((p) => p.kind === filter);
    }, [filter]);

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
                    Smaller experiments, practice repositories, and course
                    projects. This list isn’t exhaustive—just a growing archive
                    of things I’ve built.
                </p>
            </header>

            {/* Tabs */}
            <section className="mt-8">
                <div className="inline-flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-white p-2">
                    {FILTERS.map((f) => {
                        const active = f.id === filter;
                        return (
                            <button
                                key={f.id}
                                type="button"
                                onClick={() => setFilter(f.id)}
                                className={[
                                    "rounded-lg px-3 py-1.5 text-sm transition",
                                    active
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-700 hover:bg-slate-100",
                                ].join(" ")}
                            >
                                {f.label}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Results */}
            <section className="mt-8 space-y-5">
                {filtered.map((p) => {
                    const cardBody = (
                        <Card>
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

                                {!p.repoUrl ? (
                                    <span className="mt-1 text-xs text-slate-500">
                                        Private
                                    </span>
                                ) : null}
                            </div>
                        </Card>
                    );

                    // Public: whole card is a link
                    if (p.repoUrl) {
                        return (
                            <Link
                                key={p.title}
                                href={p.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  block rounded-2xl
                  hover:no-underline
                  focus:outline-none focus:ring-2 focus:ring-slate-400
                  transition
                  hover:-translate-y-1 hover:shadow-md
                "
                            >
                                {cardBody}
                            </Link>
                        );
                    }

                    // Private: not clickable
                    return <div key={p.title}>{cardBody}</div>;
                })}

                {filtered.length === 0 ? (
                    <p className="text-sm text-slate-600">
                        No projects in this category yet.
                    </p>
                ) : null}
            </section>
        </main>
    );
}
