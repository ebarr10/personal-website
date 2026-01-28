import { Card } from "@/components/card";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <main className="container max-w-3xl mx-auto px-4">
            <section className="text-center mt-20">
                <h1 className="text-5xl font-bold mb-4">Ethan</h1>
                <h2 className="text-2xl mb-6">Software Engineer & Developer</h2>

                <p className="mx-auto mt-6 max-w-prose text-slate-700 leading-relaxed">
                    Software engineer working across the stack, focused on
                    building reliable, well-considered products.
                </p>
            </section>
            <div className="mt-10 space-y-6">
                <Card>
                    <h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        What I do
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-900">
                        I primarily work on backend systems—APIs, internal
                        tools, and cloud-based infrastructure—where correctness,
                        reliability, and maintainability matter. I also make a
                        point to keep developing across other areas of the
                        stack, whether that’s frontend work, data workflows, or
                        product-level decisions, so I understand how the pieces
                        fit together.
                    </p>
                </Card>

                <Card>
                    <h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Why this site exists
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-900">
                        I built this site as a simple, long-lived home for my
                        work, side projects, and notes as I learn. I do my best
                        to keep things up to date here, but for the most current
                        view of what I’m working on, my GitHub is always the
                        most accurate source. If you’d like to connect or reach
                        out, LinkedIn is usually the easiest way.
                    </p>
                </Card>

                <Card>
                    <h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        What you’ll find here
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-900">
                        This site brings together my professional work, side
                        projects, and writing in one place, with an emphasis on
                        keeping things organized and easy to explore. Not
                        everything here will be relevant to everyone—but for
                        those who are interested, it’s meant to be a clear
                        snapshot of what I’ve been building and learning.
                    </p>
                </Card>
            </div>
            <section className="mt-10 flex justify-center gap-5 text-slate-600">
                <a
                    href="https://github.com/ebarr10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-slate-900"
                    aria-label="GitHub"
                >
                    <FaGithub size={28} />
                </a>
                <a
                    href="https://www.linkedin.com/in/ethan-barr--/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-slate-900"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={28} />
                </a>
            </section>
        </main>
    );
}
