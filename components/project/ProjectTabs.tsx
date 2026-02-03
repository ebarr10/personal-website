import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProjectTab } from "@/lib/projects/types";

export function ProjectTabs({ tabs }: { tabs: ProjectTab[] }) {
    const defaultValue = tabs[0]?.id ?? "overview";

    return (
        <Tabs defaultValue={defaultValue} className="mt-8">
            <TabsList>
                {tabs.map((t) => (
                    <TabsTrigger key={t.id} value={t.id}>
                        {t.label}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((t) => (
                <TabsContent key={t.id} value={t.id} className="mt-6">
                    <div className="space-y-4">
                        {t.paragraphs?.map((p, i) => (
                            <p
                                key={i}
                                className="text-slate-700 leading-relaxed max-w-prose"
                            >
                                {p}
                            </p>
                        ))}

                        {t.bullets?.length ? (
                            <ul className="list-disc pl-5 text-slate-700 space-y-2">
                                {t.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        ) : null}

                        {t.tags?.length ? (
                            <div className="flex flex-wrap gap-2">
                                {t.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ) : null}

                        {t.links?.length ? (
                            <div className="flex flex-wrap gap-3">
                                {t.links.map((l) => (
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
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}
