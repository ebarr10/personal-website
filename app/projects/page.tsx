import Link from "next/link";
import { Card } from "@/components/card";
import { featuredProjects } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
                    A curated set of projects I’ve built to explore ideas, learn
                    new tools, and ship useful products. For the full archive,
                    see Misc Projects.
                </p>
            </header>

            <section className="mt-10">
                <h2 className="text-lg font-medium">Featured</h2>

                <div className="mt-6 space-y-6">
                    {featuredProjects.map((p) => (
                        <Card key={p.slug} interactive>
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <Link
                                        href={`/projects/${p.slug}`}
                                        className="hover:no-underline"
                                    >
                                        <h3 className="text-base font-medium">
                                            {p.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                            {p.subtitle}
                                        </p>

                                        {p.badges?.length ? (
                                            <p className="mt-3 text-xs text-slate-500">
                                                {p.badges.join(" · ")}
                                            </p>
                                        ) : null}
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mt-12">
                <h2 className="text-lg font-medium">More</h2>
                <p className="mt-2 text-sm text-slate-600 max-w-prose">
                    Smaller experiments, practice repositories, and course
                    projects.
                </p>
                <div className="mt-4">
                    <Link
                        href="/projects/misc"
                        className="inline-flex rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                        Browse Misc Projects →
                    </Link>
                </div>
            </section>
        </main>
    );
}
