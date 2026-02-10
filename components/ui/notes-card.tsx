import Link from "next/link";

export default function NotesCard({
    title,
    description,
    href,
}: {
    title: string;
    description: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="rounded-xl border bg-white p-5 shadow-sm hover:bg-slate-50 transition"
        >
            <h2 className="font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {description}
            </p>
            <div className="mt-4 text-sm text-slate-500">View notes →</div>
        </Link>
    );
}
