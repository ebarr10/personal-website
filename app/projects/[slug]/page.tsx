import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectTabs } from "@/components/project/project-tabs";
import { getFeaturedProject } from "@/lib/projects";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = getFeaturedProject(slug);
    if (!project) return notFound();

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
                    {project.title}
                </h1>
                <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
                    {project.subtitle}
                </p>

                {project.links?.length ? (
                    <div className="mt-4 flex flex-wrap gap-3">
                        {project.links.map((l) => (
                            <Link
                                key={l.url}
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-slate-600 underline underline-offset-4 hover:text-slate-900"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                ) : null}
            </header>

            <ProjectTabs tabs={project.tabs} />
        </main>
    );
}
