import InfoCard from "@/components/ui/info-card";
import NextLinkCard from "@/components/ui/next-link-card";

export default function AboutPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight">About</h1>
                <p className="text-slate-600 leading-relaxed">
                    A bit more context on why this site exists, how it’s
                    organized, and where to go next.
                </p>
            </header>

            <div className="space-y-6">
                <InfoCard title="Why I built this">
                    <p>
                        I wanted a simple, long-lived place to keep my work and
                        thinking in one spot. Projects I’ve shipped, experiments
                        in progress, and notes that capture what I learned along
                        the way.
                    </p>
                    <p className="mt-3">
                        Over time, resumes and scattered repos get out of date.
                        This site is meant to be a clearer snapshot of what I’m
                        building and what I’m learning.
                    </p>
                </InfoCard>

                <InfoCard title="How it’s organized">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Projects</strong> are things I’ve built—some
                            polished, some experimental—with notes on what
                            worked and what I’d change.
                        </li>
                        <li>
                            <strong>Notes</strong> are where I write things down
                            as I learn, especially when something clicks or
                            trips me up.
                        </li>
                        <li>
                            <strong>About</strong> is just context: what this
                            site is, why it exists, and how I’m using it.
                        </li>
                    </ul>
                </InfoCard>

                <InfoCard title="What I’m optimizing for">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Keeping things clear instead of trying to show
                            everything
                        </li>
                        <li>Actually finishing and shipping things</li>
                        <li>
                            Building patterns I can reuse instead of one-off
                            demos
                        </li>
                        <li>
                            Writing things down so I don’t relearn the same
                            lessons twice
                        </li>
                    </ul>
                </InfoCard>

                <InfoCard title="How to explore">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Start with <strong>Projects</strong> if you want to
                            see what I’ve built.
                        </li>
                        <li>
                            Check <strong>Notes</strong> if you’re curious how I
                            think or learn.
                        </li>
                        <li>
                            <strong>About Me</strong> is background if you want
                            more context.
                        </li>
                        <li>
                            <strong>Where I Learn</strong> is a list of the
                            resources I actually use.
                        </li>
                    </ul>
                </InfoCard>

                <InfoCard title="What this isn’t">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>It’s not meant to replace a resume</li>
                        <li>Not everything here is finished or “perfect”</li>
                        <li>
                            Most notes are written for me first, then lightly
                            cleaned up
                        </li>
                    </ul>
                </InfoCard>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <NextLinkCard
                    title="About Me"
                    description="A quick background on what I do and what I care about."
                    href="/about/me"
                />
                <NextLinkCard
                    title="Where I Learn"
                    description="Resources and habits that shape how I learn and build."
                    href="/about/learn"
                />
            </div>
        </main>
    );
}
