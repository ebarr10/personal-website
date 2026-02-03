import Link from "next/link";
import { Card } from "@/components/card";

export default function ForemanPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            {/* Header */}
            <header>
                <Link
                    href="/work"
                    className="mt-4 inline-block text-sm text-slate-600 hover:text-slate-900"
                >
                    ← Back to Work
                </Link>
                <h1 className="text-3xl font-bold tracking-tight">
                    OBM | Foreman
                </h1>

                <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
                    Foreman is an operations platform for managing and analyzing
                    large-scale energy and infrastructure systems, originally
                    focused on mining and expanding into the broader power
                    market.
                </p>

                <p className="mt-2 text-sm text-slate-600">
                    <a
                        href="https://obm.io/miners/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-slate-900"
                    >
                        Visit the Foreman website
                    </a>
                </p>
            </header>

            {/* My Role */}
            <section className="mt-10">
                <h2 className="text-lg font-medium">My role</h2>

                <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
                    I joined Foreman as its third official employee shortly
                    after graduating, and worked primarily on backend systems
                    and internal tools supporting monitoring, data ingestion,
                    and operational workflows.
                </p>
                <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
                    In an early-stage environment, I contributed broadly to core
                    platform features while continuously developing my skills as
                    the product and infrastructure evolved.
                </p>
            </section>

            {/* Beyond Engineering */}
            <section className="mt-12">
                <h2 className="text-lg font-medium">Beyond engineering</h2>

                <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
                    As an early engineer, my responsibilities extended beyond
                    writing code. I helped onboard new team members, worked
                    directly with customers to understand their needs, and
                    supported the team through product demos, conferences, and
                    customer-facing discussions.
                </p>

                <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
                    I was also involved in diagnosing and resolving issues
                    surfaced through customer support, helping ensure problems
                    were clearly understood, prioritized, and addressed in ways
                    that improved the product over time.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-lg font-medium">Working at scale</h2>

                <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
                    Joining early meant seeing systems evolve from supporting
                    hundreds of miners to supporting large-scale deployments. As
                    usage grew, previously reasonable designs began to surface
                    performance and reliability bottlenecks.
                </p>

                <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
                    I gained hands-on experience identifying these limitations
                    and restructuring code paths, data access patterns, and
                    workflows to improve efficiency and stability under
                    significantly higher load.
                </p>

                <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
                    This work included hands-on experience designing, debugging,
                    and maintaining services on Google Cloud, often working from
                    first principles to stand up new infrastructure and resolve
                    production issues as they arose.
                </p>
            </section>

            {/* Selected Highlights */}
            <section className="mt-12">
                <h2 className="text-lg font-medium">Selected highlights</h2>
                <p className="mt-2 text-sm text-slate-600 max-w-prose">
                    A few representative systems I contributed to (not an
                    exhaustive list).
                </p>
                <div className="mt-6 space-y-6">
                    <Card>
                        <h3 className="text-base font-medium">
                            Asset Sync & Monitoring
                        </h3>

                        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                            Systems responsible for keeping asset state
                            consistent across internal services, enabling
                            accurate monitoring, alerting, and operational
                            visibility across a growing fleet of infrastructure.
                        </p>

                        <p className="mt-3 text-xs text-slate-500">
                            Backend · Data · Reliability
                        </p>
                    </Card>

                    <Card>
                        <h3 className="text-base font-medium">Custom Issues</h3>

                        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                            An extensible system for defining and monitoring
                            custom operational issues. I helped expand the
                            original design beyond fixed checks to support
                            conditional logic (if/and/or), enabling customers to
                            create more precise and meaningful diagnostics
                            tailored to their needs.
                        </p>

                        <p className="mt-3 text-xs text-slate-500">
                            Backend · Logic · Diagnostics
                        </p>
                    </Card>

                    <Card>
                        <h3 className="text-base font-medium">Dashboard</h3>

                        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                            Core dashboard components used to visualize the
                            state of mining facilities. I helped build and
                            optimize multiple dashboard blocks to support quick
                            diagnosis and situational awareness across large
                            deployments.
                        </p>

                        <p className="mt-3 text-xs text-slate-500">
                            Frontend · Backend · Observability
                        </p>
                    </Card>

                    <Card>
                        <h3 className="text-base font-medium">
                            Power Controls
                        </h3>

                        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                            Tools used to control miner power modes and
                            operational behavior, allowing customers to adapt to
                            changing conditions and continue operating
                            profitably. I helped test, develop, and refine these
                            controls to ensure they were reliable, safe, and
                            responsive at scale.
                        </p>

                        <p className="mt-3 text-xs text-slate-500">
                            Backend · Controls · Reliability
                        </p>
                    </Card>

                    {/* Future systems can be added here */}
                </div>
            </section>
        </main>
    );
}
