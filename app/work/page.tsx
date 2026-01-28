import Link from "next/link";
import { Card } from "@/components/card";

export default function WorkPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            {/* Header */}
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Work</h1>
                <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
                    My professional work has focused on building and maintaining
                    internal tools and data-driven systems. Below is a
                    high-level overview of the environments where I’ve applied
                    that experience.
                </p>
            </header>

            {/* Work entries */}
            <section className="mt-10 space-y-6">
                <Card
                    interactive
                    className="hover:-translate-y-0.5 hover:shadow-md transition"
                >
                    <Link href="/work/foreman" className="block no-underline">
                        <h2 className="text-lg font-medium">OBM | Foreman</h2>

                        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                            Foreman is an operations platform for managing and
                            analyzing large-scale energy and infrastructure
                            systems, originally focused on mining and expanding
                            into the broader power market.
                        </p>

                        <p className="mt-3 text-xs text-slate-500">
                            Frontend · Backend · Data · Infrastructure
                        </p>
                    </Link>
                </Card>
            </section>
        </main>
    );
}
