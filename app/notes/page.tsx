import NotesCard from "@/components/ui/notes-card";

export default function NotesPage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight">Notes</h1>
                <p className="text-slate-600 leading-relaxed max-w-prose">
                    This is a hub for different kinds of notes I keep as I learn
                    and build. Each section focuses on a different area and
                    links out to its own collection.
                </p>
            </header>

            <section className="grid gap-6 sm:grid-cols-3">
                <NotesCard
                    title="Developer Notes"
                    description="Thoughts, lessons, and small write-ups from building software including design decisions, tradeoffs, and things I want to remember."
                    href="/notes/developer"
                />

                <NotesCard
                    title="Chinese Learning"
                    description="Notes from studying Chinese: patterns that clicked, things that confused me, and progress over time."
                    href="/notes/chinese"
                />

                <NotesCard
                    title="Cooking Experiments"
                    description="Lightweight notes from cooking experiments, recipes I’ve tried, and small improvements along the way."
                    href="/notes/cooking"
                />
            </section>
        </main>
    );
}
