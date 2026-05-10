import { Card } from "@/components/card";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";

export default function Home() {
    return (
        <main className="container max-w-3xl mx-auto px-4">
            <section className="text-center mt-20">
                <h1 className="text-5xl font-bold mb-4">Ethan</h1>
                <h2 className="text-2xl mb-6">Software Engineer & Developer</h2>

                <p className="mx-auto mt-6 max-w-prose text-slate-700 leading-relaxed">
                    My focus is building reliable well-considered products
                    across the stack.
                </p>
            </section>
            <div className="mt-10 space-y-6">
                <Card>
                    <h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        What I do
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-900">
                        I primarily work on backend systems including APIs,
                        internal tools, and cloud-based infrastructure with an
                        emphasis on correctness, reliability, and
                        maintainability. I also keep hands-on across the rest of
                        the stack, from frontend, data workflows, and product
                        decisions, to understand how everything comes together.
                    </p>
                </Card>

                <Card>
                    <h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Why this site exists
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-900">
                        I built this site as a simple, long-lived home for my
                        work, side projects, and learning notes. I try to keep
                        it up to date, but my GitHub is always the most accurate
                        source. If you'd like to connect, LinkedIn is usually
                        the easiest way to reach me.
                    </p>
                </Card>

                <Card>
                    <h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        What you’ll find here
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-900">
                        This site brings together my professional work, side
                        projects, and writing in one place, with a focus on
                        keeping everything organized and easy to explore. It's
                        not all relevant to everyone, but for those who are
                        interested, it provides a clear snapshot of what I've
                        been building and learning.
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
                <a
                    href="https://ebarr10.github.io/resume-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-slate-900"
                    aria-label="Resume"
                >
                    <FaRegFilePdf size={26} />
                </a>
            </section>
        </main>
    );
}
