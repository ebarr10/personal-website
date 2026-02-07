import Link from "next/link";
import { learnSections } from "../../../lib/data/learn";

export default function LearnPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
            <header className="space-y-3">
                <Link
                    href="/about"
                    className="text-sm text-slate-600 hover:text-slate-900"
                >
                    ← Back to About
                </Link>
                <h1 className="text-3xl font-semibold tracking-tight">
                    Where I Learn
                </h1>
                <p className="text-slate-600 leading-relaxed">
                    A curated list of resources I regularly return to while
                    building software and learning new concepts. This evolves
                    over time as my interests and focus change.
                </p>
            </header>

            <div className="space-y-8">
                {learnSections.map((section) => (
                    <section
                        key={section.title}
                        className="rounded-xl border bg-white shadow-sm"
                    >
                        <div className="px-5 py-4 border-b">
                            <h2 className="text-lg font-semibold">
                                {section.title}
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left">
                                <thead className="bg-slate-50">
                                    <tr>
                                        {section.columns.map((col) => (
                                            <th
                                                key={col}
                                                className="px-5 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide"
                                            >
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.rows.map((row) => (
                                        <tr
                                            key={row.label}
                                            className="border-t"
                                        >
                                            <td className="px-5 py-3">
                                                {row.href ? (
                                                    <a
                                                        href={row.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-slate-900 hover:underline"
                                                    >
                                                        {row.label}
                                                    </a>
                                                ) : (
                                                    <span className="text-slate-900">
                                                        {row.label}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-5 py-3 text-slate-700">
                                                {row.focus ?? ""}
                                            </td>
                                            <td className="px-5 py-3 text-slate-700">
                                                {row.notes ?? ""}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                ))}
            </div>

            <footer className="pt-6 border-t text-sm text-slate-500">
                <span className="italic">
                    Learning is a practice, not a phase.
                </span>
            </footer>
        </main>
    );
}
