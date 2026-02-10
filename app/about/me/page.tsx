import Link from "next/link";

export default function AboutMePage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
            <header className="space-y-3">
                <Link
                    href="/about"
                    className="text-sm text-slate-600 hover:text-slate-900"
                >
                    ← Back to About
                </Link>
                <h1 className="text-3xl font-semibold tracking-tight">
                    About Me
                </h1>
                <p className="text-slate-600 leading-relaxed">
                    A bit of background on who I am, how I work, and what I care
                    about.
                </p>
            </header>

            <section className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                    I’m a software engineer who enjoys building things that are
                    small, practical, and thought through. I tend to gravitate
                    toward work where correctness, reliability, and long-term
                    maintainability matter more than flash.
                </p>

                <p>
                    Most of my day-to-day work is backend-focused, APIs,
                    internal tools, data flows, and infrastructure but I make a
                    point to stay comfortable across the stack. I like
                    understanding how frontend decisions, product constraints,
                    and operational realities all connect, even when I’m not the
                    one writing every line.
                </p>

                <p>
                    I learn best by building real things and then reflecting on
                    what worked, what didn’t, and what I’d change next time.
                    That habit is what eventually led to this site: a place to
                    keep projects, experiments, and notes in one spot instead of
                    scattered across repos and docs.
                </p>
            </section>

            <section className="rounded-xl border bg-white shadow-sm">
                <div className="px-5 py-4 border-b">
                    <h2 className="text-sm font-semibold tracking-wide text-slate-600 uppercase">
                        How I think about work
                    </h2>
                </div>
                <div className="px-5 py-4">
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>
                            I like code that’s easy to read and reason about,
                            even when it’s doing something clever
                        </li>
                        <li>
                            I focus on building systems that stay understandable
                            and dependable over time.
                        </li>
                        <li>
                            I aim to deliver stable, maintainable solutions and
                            improve them over time.
                        </li>
                        <li>
                            The more I’m exposed to a problem or pattern, the
                            faster I tend to learn it
                        </li>
                    </ul>
                </div>
            </section>

            <section className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                    Outside of software, I spend a lot of time cooking,
                    experimenting with side projects, and studying Chinese.
                    Those interests tend to overlap more than you’d expect. They
                    all reward patience, repetition, and paying attention to
                    small details.
                </p>

                <p>
                    If you’re curious about the things I’m actively building,
                    check out the Projects section. If you’re more interested in
                    how I learn or think through problems, the Notes section is
                    usually the most honest snapshot.
                </p>
            </section>
        </main>
    );
}
